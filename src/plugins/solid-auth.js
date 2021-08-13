import {
  getSolidDataset,
  getThingAll,
  //getPublicAccess,
  //  getAgentAccess,
  // getSolidDatasetWithAcl,
  // getPublicAccess,
  // getAgentAccess,
  // getFile,
  // isRawData,
  // getContentType,
  // saveFileInContainer,
  getContainedResourceUrlAll,
  getStringNoLocaleAll,
  // //createContainerAt,
  // getSourceUrl,
  // deleteFile,
  // removeThing,
  // removeAll,
  // removeStringNoLocale,
  // deleteContainer,
  // addStringNoLocale,
  setThing,
  saveSolidDatasetAt,
  // createSolidDataset,
  // createThing,
  //addUrl,

  // overwriteFile,
  getStringNoLocale,
  getThing,
  getUrlAll,
  getUrl,
  // //  addDatetime,

  setUrl,
  //setStringNoLocale,
  //setDecimal,
  //setInteger,
  //  getDecimal,
  getInteger
  //setDatetime
} from "@inrupt/solid-client";
import { FOAF, /*LDP,*/ VCARD, RDF, AS, /*RDFS */ } from "@inrupt/vocab-common-rdf";
import { WS } from "@inrupt/vocab-solid-common";
import * as sc from '@inrupt/solid-client-authn-browser'

const IPGS = {
  base: "https://scenaristeur.github.io/ipgs#",
  id: "https://scenaristeur.github.io/ipgs#id",
  label: "https://scenaristeur.github.io/ipgs#label",
  Node: "https://scenaristeur.github.io/ipgs#Node",
  Edge: "https://scenaristeur.github.io/ipgs#Edge",
  shape: "https://scenaristeur.github.io/ipgs#shape",
  backgroundColor: "https://scenaristeur.github.io/ipgs#backgroundColor",
  borderColor: "https://scenaristeur.github.io/ipgs#borderColor",
  cid: "https://scenaristeur.github.io/ipgs#cid",
  x: "https://scenaristeur.github.io/ipgs#x",
  y: "https://scenaristeur.github.io/ipgs#y",
  z: "https://scenaristeur.github.io/ipgs#z",
  properties: "https://scenaristeur.github.io/ipgs#properties",
  updates: "https://scenaristeur.github.io/ipgs#updates",
  from: "https://scenaristeur.github.io/ipgs#from",
  to: "https://scenaristeur.github.io/ipgs#to"
}

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    //  let sockets = []
    //    console.log(store)

    Vue.prototype.$explore = async function(path){
    //  this.$subscribe(path)
      if(path.url.endsWith('/')){
        this.$readContainer(path)
      }else{
        this.$readResource(path)
      }
      //  this.$subscribe(path)
    },

    Vue.prototype.$readContainer = async function(path){
        let containerUrl = path.url
        const myDataset = await getSolidDataset( containerUrl, {fetch: sc.fetch});
        console.log(myDataset)
        let resources = await getContainedResourceUrlAll(myDataset,{fetch: sc.fetch} )
        console.log("Resources", resources)
        let container = {url: containerUrl, resources: resources}
        store.commit('app/setContainer', container)
        return container
      },

      Vue.prototype.$readResource = async function(chose){
        console.log("$readResource", chose)
        let url = chose.url

        let ds =  await getSolidDataset(url, {fetch: sc.fetch})
        let mainThing = url.substring(url.lastIndexOf('/') + 1).split('.ttl')[0]
        console.log(mainThing)
        let thing = await getThing(ds,url+"#"+mainThing) //await getThingAll(ds)[0]
        let updates = await getStringNoLocaleAll(thing, AS.content);
        let thingsTemp = await getThingAll(ds)
        let network = {nodes: [], edges: []}
        for await (const t of thingsTemp){
          console.log(t.url, t)
          let id = await getStringNoLocale(t, IPGS.id);
          let type = await getUrl(t, RDF.type);
          let label = await getStringNoLocale(t, IPGS.label);
          console.log(type)
          let oneThing = {id: id, url: t.url, type: type, label: label}
          if(type != null && type == IPGS.Node){
            oneThing.color = {}
            oneThing.type = type.replace(IPGS.base, '')
            oneThing.shape = await getStringNoLocale(t, IPGS.shape);
            //suppression pour reorganisation auto
            // oneThing.x = await getDecimal(t, IPGS.x)
            // oneThing.y = await getDecimal(t, IPGS.y)
            // oneThing.z = await getDecimal(t, IPGS.z)
            oneThing.cid = await getInteger(t, IPGS.cid)
            oneThing.color.background = await getStringNoLocale(t, IPGS.backgroundColor)
            oneThing.color.border = await getStringNoLocale(t, IPGS.borderColor)
            oneThing.properties = await getStringNoLocale(t, IPGS.properties)
            let updates = await getStringNoLocale(t, IPGS.updates)
            oneThing.updates = JSON.parse(`${updates}`)
            network.nodes.push(oneThing)
          }else if (type != null && type == IPGS.Edge){
            oneThing.type = type.replace(IPGS.base, '')
            let fromTemp = await getUrl(t, IPGS.from);
            let toTemp = await getUrl(t, IPGS.to);
            if (fromTemp.startsWith(url)){
              oneThing.from = fromTemp.replace(url,'')
            }else{
              oneThing.from = fromTemp
            }
            if (toTemp.startsWith(url)){
              oneThing.to = toTemp.replace(url,'')
            }else{
              oneThing.to = toTemp
            }
            network.edges.push(oneThing)
          }else{
            console.log("type unknown", type)
          }
        }

        console.log('network',network)


        let game = {url: url, updates : updates, network: network}
        console.log("Game",game)
        store.commit('gamesync/setGame', game)
      },


    Vue.prototype.$setUrl= async function(thing_url, pred, object){
      console.log(thing_url, pred, object)

      try{
        const dataset = await getSolidDataset( thing_url, { fetch: sc.fetch });
        console.log("DATASET", dataset)
        let thing = await getThing( dataset, thing_url );
        thing = setUrl(thing, pred, object);
        let thingInDs = setThing(dataset, thing);
        let savedThing  = await saveSolidDatasetAt(thing_url, thingInDs, { fetch: sc.fetch } );
        console.log("Saved thing", savedThing)

        let session = sc.getDefaultSession()
        this.$getPodInfosFromSession(session)

        return savedThing
        // pod.name = await getStringNoLocale(profile, FOAF.name);
        // pod.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        // pod.storage = await getUrl(profile, WS.storage);
        // pod.photo = await getUrl(profile, VCARD.hasPhoto);
        // pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
        // store.commit("vatch/addToNetwork", pod.publicTags)
        //this.$subscribe(pod.storage)
        //  console.log("getpodinfos",pod)
      }catch(e)
      {
        console.log("erreur",e, thing_url)
      }
    },


    Vue.prototype.$login= async function(issuer) {

      try{
        await sc.login({
          oidcIssuer: issuer,
          redirectUrl: window.location.href,
          clientName: "GameSync",
        });
      } catch(e){
        alert("$login "+e)
      }
    },

    Vue.prototype.$logout = async function(params){
      try{
        let session = sc.getDefaultSession()
        console.log(params)
        await session.logout()
        store.commit('session/setSession',session)
        store.commit('session/setPod', null)
        //  store.commit('booklice/setPath', "")
      } catch(e){
        alert("$logout "+e)
      }
    },


    Vue.prototype.$checkSessions = async function( params){
      console.log("params",params)
      console.log("window.location.href", window.location.href)
      let session = sc.getDefaultSession()
      console.log("session",session)

      //  let session = sc.getDefaultSession()
      sc.onSessionRestore((url) => {
        console.log("restore",url)
        let query = url.split('?')[1]
        console.log('query', query)
        // const p = new URLSearchParams(url);
        // //  if(p.length>0){
        // console.log("params Params", p.values)
        //}

        //  alert ("url",url)
        //  router.push({path: '?'+query})
        store.commit('session/setSession',session)
        //  dispatch('getPodInfos', session)
        this.$getPodInfosFromSession(session)
      });


      try{
        await sc.handleIncomingRedirect({restorePreviousSession : params.restore, url: window.location.href})
        .then((info) => {
          console.log(info)
        })
        store.commit('session/setSession',session)
        //  dispatch('getPodInfos', session)
        this.$getPodInfosFromSession(session)

      } catch(e){
        alert("$checkSessions " +e)
      }
    },
    Vue.prototype.$getPodInfosFromSession = async function(session){
      try{
        let pod = {}
        pod.logged = session.info.isLoggedIn
        if (pod.logged) {
          pod.webId = session.info.webId
          pod = await this.$getPodInfos(pod)
          store.commit('session/setPod', pod)
          if (pod.storage != null){
            //  this.$setCurrentThingUrl(pod.storage)
            //  store.commit('booklice/setPath', pod.storage+'public/bookmarks/')
            //let publicTagFile = pod.storage+'public/tags.ttl'
            //let privateTagFile = podStorage+'private/tags.ttl'
            // let tags = await this.$getTags(publicTagFile)
            // console.log("############################tags",tags)
          }
        }else{
          store.commit('session/setPod', null)
          //  store.commit('session/setThings', [])
        }
      } catch(e){
        alert("$getPodInfosFromSession "+e)
      }
    },

    Vue.prototype.$getPodInfos = async function(pod){
      try{
        const dataset = await getSolidDataset( pod.webId, { fetch: sc.fetch });
        console.log("DATASET", dataset)
        let profile = await getThing( dataset, pod.webId );
        pod.name = await getStringNoLocale(profile, FOAF.name);
        pod.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        pod.storage = await getUrl(profile, WS.storage);
        pod.photo = await getUrl(profile, VCARD.hasPhoto);
        // pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
        // store.commit("vatch/addToNetwork", pod.publicTags)
        //this.$subscribe(pod.storage)
        //  console.log("getpodinfos",pod)
      }catch(e)
      {
        console.log("erreur",e, pod)
      }
      return await pod
    }


  }


}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
