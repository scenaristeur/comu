import {
  getSolidDataset,
  // getThingAll,
  //getPublicAccess,
  //  getAgentAccess,
  // getSolidDatasetWithAcl,
  // getPublicAccess,
  // getAgentAccess,
  // getFile,
  // isRawData,
  // getContentType,
  // saveFileInContainer,
  // getContainedResourceUrlAll,
  // getStringNoLocaleAll,
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
  //getInteger
  //setDatetime
} from "@inrupt/solid-client";
import { FOAF, /*LDP,*/ VCARD, /*RDF, AS, RDFS */ } from "@inrupt/vocab-common-rdf";
import { WS } from "@inrupt/vocab-solid-common";
import * as sc from '@inrupt/solid-client-authn-browser'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    //  let sockets = []
    //    console.log(store)


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
