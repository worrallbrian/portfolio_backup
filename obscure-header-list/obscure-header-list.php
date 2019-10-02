<?php
if (!isset($_SESSION)) {
	session_start();
}

$ServerHeaders=["------------","ANNOTATION_SERVER","API_VERSION","APPL_PHYSICAL_PATH","BASH","BASH_VERSINFO","BASH_VERSION","CERN-HTTPD","CHARSET_DETERMINED_BY","CHARSET_HTTP_METHOD","CHARSET_SERVER_NAME","CHARSET_SERVER_PORT","COMPUTERNAME","CONTENT_LENGTH","CONTENT_TYPE","Cache-Control","Client-ID","Client-IP","Connection","Content-Type","DIRSTACK","DNT","DOCUMENT_ROOT","ETag","EUID","Expect","FCGI_ROLE","FGI_ROLE","FORWARDED_FOR_IP","GATEWAY_INTERFACE","GROUPS","HTTPS","HTTPS_KEYSIZE","HTTPS_SECRETKEYSIZE","HTTP_10_0_0_0","HTTP_13_PROFILE","HTTP_19_PROFILE","HTTP_1_PROFILE","HTTP_1_PROFILE_DIFF_0","HTTP_1_PROFILE_DIFF_1","HTTP_1_PROFILE_DIFF_2","HTTP_1_PROFILE_DIFF_3","HTTP_1_PROFILE_DIFF_4","HTTP_1_PROFILE_DIFF_5","HTTP_1_PROFILE_DIFF_6","HTTP_1_PROFILE_DIFF_7","HTTP_1_PROFILE_DIFF_8","HTTP_1_PROFILE_DIFF_9","HTTP_56_PROFILE","HTTP_56_PROFILE_DIFF_1","HTTP_56_PROFILE_DIFF_2","HTTP_56_PROFILE_DIFF_3","HTTP_9_02_22_RDF_SYNTAX_NS_","HTTP_AAAAAAAAAAAAAAA","HTTP_ACCEPT","HTTP_ACCEPT_APPLICATION","HTTP_ACCEPT_CHARSET","HTTP_ACCEPT_ENCODE","HTTP_ACCEPT_ENCODIG","HTTP_ACCEPT_ENCODING","HTTP_ACCEPT_LANGUAGE","HTTP_ACCEPT_LANGURANGE","HTTP_ACCEPT_RANGES","HTTP_APN","HTTP_AXXEPT_ENCODING","HTTP_A_IM","HTTP_BEARER","HTTP_BEARER_INDICATION","HTTP_BENCHMARKSTART","HTTP_BROWSERTYPE","HTTP_BROWSERVER","HTTP_BROWSER_TYPE","HTTP_CACHE_CONTROL","HTTP_CACHE_INFO","HTTP_CALLED_STATION_ID","HTTP_CALLING_STATION_ID","HTTP_CGET_HTTP","HTTP_CLI","HTTP_CLIENTADDRESS","HTTP_CLIENTID","HTTP_CLIENTSDUSIZE","HTTP_CLIENT_ADDRESS","HTTP_CLIENT_IP","HTTP_CNEONCTION","HTTP_COIKOE","HTTP_COMING_FROM","HTTP_COMPAQ_HTTPSERVERVERSION","HTTP_COMPAQ_WBEM_USERNAME","HTTP_CONNECTION","HTTP_CONTENT_LANGUAGE","HTTP_CONTENT_LOCATION","HTTP_CONTENT_RAWTYPE","HTTP_CONTEXT_ID","HTTP_CONTRACTID","HTTP_COOKIE","HTTP_COOKIE2","HTTP_COS_NAME","HTTP_CUDA_CLIIP","HTTP_CUI","HTTP_DATE","HTTP_DEPTH","HTTP_DLWEB","HTTP_DOWNLINKBANDWIDTH","HTTP_DRM_VERSION","HTTP_DUMMY_CHAR_XXX","HTTP_DUMMY_ENCO_XXXX","HTTP_DUMMY_LANG_XXXX","HTTP_ENCODING_VERSION","HTTP_EPT_LANGURANGE","HTTP_EXPECT","HTTP_EXPIRES","HTTP_EXTENSION","HTTP_FILE_REDIRECT","HTTP_FORWARDED","HTTP_FORWARDED_FOR","HTTP_FORWARDED_FOR_IP","HTTP_FOUR11REMOTEIP","HTTP_FRAMED_IP_ADDRESS","HTTP_FROM","HTTP_GET_HTTP","HTTP_HEADER","HTTP_HELPAGENT","HTTP_HNAME1","HTTP_HNAME2","HTTP_HNAME3","HTTP_HOST","HTTP_HTTP_ACCEPT","HTTP_HTTP_ACCEPT_ENCODING","HTTP_HTTP_VIA","HTTP_HTTP_X_FORWARDED_FOR","HTTP_HTTP_X_JINNY_IMSI","HTTP_IANCE","HTTP_IDENT_USER","HTTP_IF_MODIFIED_SINCE","HTTP_IF_MODIFIGET_HTTP","HTTP_IF_NONE_MATCH","HTTP_IF_RANGE","HTTP_IGCLI","HTTP_IGSOURCEADDRESS","HTTP_IMSISDN","HTTP_INIT_INFO","HTTP_IPSESSIONBEGIN","HTTP_I_MSISDN","HTTP_J_ES_US","HTTP_KEEP_ALIVE","HTTP_MAC","HTTP_MAX_FORWARDS","HTTP_MIN","HTTP_MODELNAME","HTTP_MSCOPE","HTTP_MSCOPE_MSISDN","HTTP_MSCOPE_REMOTESERVER","HTTP_MSISDN","HTTP_MT_PROXY_ID","HTTP_MVNO","HTTP_NEWUSER","HTTP_NFUSERADDR","HTTP_NMOBILEALLIANCE","HTTP_NNCOECTION","HTTP_NOVINET","HTTP_NPFREFR","HTTP_OAS_IP","HTTP_OPERATOR","HTTP_OPERATORID","HTTP_OPT","HTTP_ORACLE_ECID","HTTP_ORANGE_CLI","HTTP_OXPRY_CONNECTION","HTTP_PAOS","HTTP_PC_REMOTE_ADDR","HTTP_PHP_MODE","HTTP_PRAGMA","HTTP_PROFILE","HTTP_PROFILE_DIFF","HTTP_PROXY","HTTP_PROXY_AGENT","HTTP_PROXY_AUTHORIZATION","HTTP_PROXY_CONNECCOOKIE","HTTP_PROXY_CONNECTION","HTTP_PROXY_REFERER","HTTP_PROXY_~~~~~~~~~~","HTTP_RANGE","HTTP_REDIRECTION","HTTP_REFERER","HTTP_REFERRER","HTTP_REMOTE_ADDR","HTTP_REMOTE_HOST","HTTP_REMOTE_HOST_WP","HTTP_REQUEST_IP","HTTP_RIM_DEVICE_EMAIL","HTTP_RIM_DEVICE_ID","HTTP_RLNCLIENTIPADDR","HTTP_ROAMINGOUTFLAG","HTTP_SCREENSIZE","HTTP_SEPHIRA","HTTP_SERVER","HTTP_SERVICECONTROLINFO","HTTP_SERVICESUBSCRIBED","HTTP_SID","HTTP_SOUNDPOLY","HTTP_SP_CLIENT","HTTP_SP_HOST","HTTP_SUBSCRIBER","HTTP_SURROGATE_CAPABILITIES","HTTP_SVCOPERATOR","HTTP_SWF_HDR_MSG","HTTP_TAC","HTTP_TE","HTTP_TECH_PROFILES_UAPROF_CCPPSCHEMA_20021113_","HTTP_TM_USER_ID","HTTP_TRANSFER_ENCODING","HTTP_TRANSLATE","HTTP_TTL","HTTP_U","HTTP_UA_COLOR","HTTP_UA_CPU","HTTP_UA_LANGUAGE","HTTP_UA_OS","HTTP_UA_PIXELS","HTTP_UA_VOICE","HTTP_UPLINKBANDWIDTH","HTTP_USEPROMOTIONFLOWS","HTTP_USERID","HTTP_USERIP","HTTP_USER_AGENT","HTTP_USER_AGENT_NAME","HTTP_USER_AGENT_VIA","HTTP_USER_IDENTITY_FORWARD_MSISDN","HTTP_USER_IDENTITY_FORWARD_MSISDN","HTTP_USER_IP","HTTP_V551_PROFILEL___SOFTWAREPLATFORM","HTTP_VARY","HTTP_VIA","HTTP_VLR","HTTP_WACLIENTIP","HTTP_WACONNPOOL","HTTP_WAHTTPSREQUEST","HTTP_WALBSERVER","HTTP_WAORIGDESTPORT","HTTP_WAPCONNECTION","HTTP_WAPMASK","HTTP_WAPSERVICE","HTTP_WAP_CONNECTION","HTTP_WAP_NETWORK_INFO","HTTP_WARAMCACHEHITS","HTTP_WARAMCACHEORIGCONDITIONAL","HTTP_WASNAT","HTTP_WEFERER","HTTP_WSER_AGENT","HTTP_WSIP","HTTP_XID","HTTP_XID","HTTP_XONNECTION","HTTP_XOOKIE","HTTP_XPROXY","HTTP_XROXY_CONNECTION","HTTP_XXXXXX","HTTP_XXXXXXX","HTTP_XXXXXXXXXXXXXXX","HTTP_XXXXXXXXXXXXXXXXX","HTTP_XXX_REAL_IP","HTTP_X_ACCESS_OPERATOR_ID","HTTP_X_ACCESS_SUBNYM","HTTP_X_ACCOUNT_ID","HTTP_X_ACCT_SESSION_ID","HTTP_X_AIM","HTTP_X_ANI","HTTP_X_AOL_AUTH","HTTP_X_APN","HTTP_X_APN_ID","HTTP_X_AVANTGO_BROWSER","HTTP_X_AVANTGO_CHANNELCOUNT","HTTP_X_AVANTGO_CHANNELID","HTTP_X_AVANTGO_CHANNEL_0","HTTP_X_AVANTGO_CHANNEL_1","HTTP_X_AVANTGO_CHANNEL_10","HTTP_X_AVANTGO_CHANNEL_11","HTTP_X_AVANTGO_CHANNEL_12","HTTP_X_AVANTGO_CHANNEL_13","HTTP_X_AVANTGO_CHANNEL_2","HTTP_X_AVANTGO_CHANNEL_3","HTTP_X_AVANTGO_CHANNEL_4","HTTP_X_AVANTGO_CHANNEL_5","HTTP_X_AVANTGO_CHANNEL_6","HTTP_X_AVANTGO_CHANNEL_7","HTTP_X_AVANTGO_CHANNEL_8","HTTP_X_AVANTGO_CHANNEL_9","HTTP_X_AVANTGO_CLIENTCHARSET","HTTP_X_AVANTGO_CLIENTLANGUAGE","HTTP_X_AVANTGO_COLORDEPTH","HTTP_X_AVANTGO_CRADLESYNC","HTTP_X_AVANTGO_DEVICEID","HTTP_X_AVANTGO_DEVICEOS","HTTP_X_AVANTGO_DEVICEOSVERSION","HTTP_X_AVANTGO_DEVICEPROCESSOR","HTTP_X_AVANTGO_EXTRADATA","HTTP_X_AVANTGO_MAXSYNCAMOUNTKB","HTTP_X_AVANTGO_MCP","HTTP_X_AVANTGO_ONLINEREQUEST","HTTP_X_AVANTGO_OWNEDLICENSE_COUNT","HTTP_X_AVANTGO_PAGEVIEW_COUNT","HTTP_X_AVANTGO_PLATFORMDATA","HTTP_X_AVANTGO_QUOTA_EXPIRATION","HTTP_X_AVANTGO_QUOTA_ID","HTTP_X_AVANTGO_SCREENSIZE","HTTP_X_AVANTGO_SECURESYNC","HTTP_X_AVANTGO_SERVER_HOSTNAME","HTTP_X_AVANTGO_SERVICELICENSE_COUNT","HTTP_X_AVANTGO_SYNC_SEQUENCE_NUM","HTTP_X_AVANTGO_USER","HTTP_X_AVANTGO_USERID","HTTP_X_AVANTGO_USER_COUNTRY","HTTP_X_AVANTGO_USER_CREATION_TIME","HTTP_X_AVANTGO_USER_EMAIL","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_0","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_1","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_10","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_2","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_3","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_4","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_5","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_6","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_7","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_8","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_9","HTTP_X_AVANTGO_USER_EXTENDEDDEMOGRAPHIC_COUNT","HTTP_X_AVANTGO_USER_INTEREST_0","HTTP_X_AVANTGO_USER_INTEREST_1","HTTP_X_AVANTGO_USER_INTEREST_2","HTTP_X_AVANTGO_USER_INTEREST_3","HTTP_X_AVANTGO_USER_INTEREST_COUNT","HTTP_X_AVANTGO_USER_LANGUAGE","HTTP_X_AVANTGO_USER_LOCATION","HTTP_X_AVANTGO_USER_NO_DEMOGRAPHICS","HTTP_X_AVANTGO_USER_REREGISTRATION_TIME","HTTP_X_AVANTGO_USER_TIMEZONE","HTTP_X_AVANTGO_USER_UPDATENOTICENOTEXCLUDED","HTTP_X_AVANTGO_USER_ZIP","HTTP_X_AVANTGO_VERSION","HTTP_X_AZC_REMOTE_ADDR","HTTP_X_BEARER_TYPE","HTTP_X_BLUECOAT_VIA","HTTP_X_BROWSER_HEIGHT","HTTP_X_BROWSER_TIMESTAMP","HTTP_X_BROWSER_VERSION","HTTP_X_BROWSER_WIDTH","HTTP_X_CACHE","HTTP_X_CACHEBUSTER","HTTP_X_CARRIER","HTTP_X_CELL_TOWER_CURRENT_ID","HTTP_X_CELL_TOWER_CURRENT_SIGNAL_STRENGTH","HTTP_X_CELL_TOWER_CURRENT_TIME","HTTP_X_CELL_TOWER_PREVIOUS_ID","HTTP_X_CELL_TOWER_PREVIOUS_TIME","HTTP_X_CELL_TOWER_SIGNAL_PREVIOUS_STRENGTH","HTTP_X_CEPT_ENCODING","HTTP_X_CHARGING_ID","HTTP_X_CISCO_BBSM_CLIENTIP","HTTP_X_CLIENT","HTTP_X_CLUSTER_CLIENT_IP","HTTP_X_CNECTION","HTTP_X_CNY_CONNECTION","HTTP_X_COMING_FROM","HTTP_X_COMPRESSION","HTTP_X_CW_AUTH","HTTP_X_DANGEROUS_STUFF","HTTP_X_DELEGATE_REMOTE_HOST","HTTP_X_DEVICE_OS","HTTP_X_DEVICE_TYPE","HTTP_X_DEVICE_USER_AGENT","HTTP_X_DP","HTTP_X_D_FORWARDER","HTTP_X_EBO_UA","HTTP_X_EGZ","HTTP_X_EMAIL_ADDRESS","HTTP_X_FEEDBURNER_URI","HTTP_X_FH_APN","HTTP_X_FH_EVENT_ID","HTTP_X_FH_IP","HTTP_X_FH_MSISDN","HTTP_X_FH_PORT","HTTP_X_FH_VIRTUAL_GATEWAY","HTTP_X_FILTERED","HTTP_X_FILTERGATE_REQUEST","HTTP_X_FORWARDED_FOR","HTTP_X_FORWARDED_HOST","HTTP_X_FORWARDED_SERVER","HTTP_X_FSN","HTTP_X_GGSNIP","HTTP_X_GPS_CURRENT_ALTITUDE","HTTP_X_GPS_CURRENT_DIRECTION","HTTP_X_GPS_CURRENT_LATITUDE","HTTP_X_GPS_CURRENT_LONGITUDE","HTTP_X_GPS_CURRENT_SPEED","HTTP_X_GPS_CURRENT_TIME","HTTP_X_GPS_PREVIOUS_ALTITUDE","HTTP_X_GPS_PREVIOUS_DIRECTION","HTTP_X_GPS_PREVIOUS_LATITUDE","HTTP_X_GPS_PREVIOUS_SPEED","HTTP_X_GPS_PREVIOUS_TIME","HTTP_X_GTM_FORWARD_SERVER_IP","HTTP_X_H3G_MSISDN","HTTP_X_H3G_PARTY_ID","HTTP_X_HOST","HTTP_X_HTS_APN","HTTP_X_HTS_CLID","HTTP_X_HTS_USER","HTTP_X_HTS_WTLS","HTTP_X_HTX_AGENT","HTTP_X_HUAWEI_APN","HTTP_X_HUAWEI_AUTHMETHOD","HTTP_X_HUAWEI_CHARGINGID","HTTP_X_HUAWEI_FAKEID","HTTP_X_HUAWEI_IMSI","HTTP_X_HUAWEI_NASIP","HTTP_X_HUAWEI_NETWORKTYPE","HTTP_X_HUAWEI_STACKTYPE","HTTP_X_HUAWEI_USERID","HTTP_X_HUAWEI_USERNAME","HTTP_X_HUAWEI_WTLSSETTING","HTTP_X_ICAP_VERSION","HTTP_X_IF_MODIFIED_SINCE","HTTP_X_IMFORWARDS","HTTP_X_IMSI","HTTP_X_INTEROP_IP_ADDRESS","HTTP_X_INTEROP_USER_AGENT","HTTP_X_IWPROXY_NESTING","HTTP_X_IWX","HTTP_X_JAT_RENDER_AREA","HTTP_X_JINNY_CID","HTTP_X_JINNY_DAD","HTTP_X_JINNY_GPRS_CHARGING_ID","HTTP_X_JINNY_IMSI","HTTP_X_JINNY_IP","HTTP_X_JINNY_USERNAME","HTTP_X_JPHONE_COLOR","HTTP_X_JPHONE_DISPLAY","HTTP_X_JPHONE_MSNAME","HTTP_X_JPHONE_REGION","HTTP_X_JPHONE_SMAF","HTTP_X_JPHONE_UID","HTTP_X_KDDI_STAMP","HTTP_X_LMT_CONNECTION_MODE","HTTP_X_LOCKING","HTTP_X_LOOKING","HTTP_X_LORI_TIME_1","HTTP_X_MCPROXYFILTER","HTTP_X_MDI_SERVICE1","HTTP_X_MDN","HTTP_X_MDS_AUTHORIZATION","HTTP_X_ME_ALLOW_ALL_DOMAINS","HTTP_X_ME_CONVERT_NMEA","HTTP_X_ME_DSR_SENSITIVITY","HTTP_X_ME_JSAPI_ALLOW","HTTP_X_ME_JSAPI_VERSION","HTTP_X_MMMM","HTTP_X_MMS_PREPAID_FLAG","HTTP_X_MOBILE_GATEWAY","HTTP_X_MOBILE_UA","HTTP_X_MOWSER_PHONE_UA","HTTP_X_MOZ","HTTP_X_MR_FOR","HTTP_X_MSID","HTTP_X_MSISDN","HTTP_X_MSP_AG","HTTP_X_MSP_APN","HTTP_X_MSP_CALLING_IP","HTTP_X_MSP_CLID","HTTP_X_MSP_MSISDN","HTTP_X_MSP_MSISDN_HEX","HTTP_X_MSP_NODE_NAME","HTTP_X_MSP_REQUESTBYTES","HTTP_X_MSP_SESSION_ID","HTTP_X_MSP_UG","HTTP_X_MSP_WAP_CLIENT_ID","HTTP_X_MTPROXY","HTTP_X_NAME","HTTP_X_NAS_IP","HTTP_X_NAVID","HTTP_X_NETWORK_INFO","HTTP_X_NETWORK_TYPE","HTTP_X_NET_INFO","HTTP_X_NOKIA_BEARER","HTTP_X_NOKIA_CONNECTION_MODE","HTTP_X_NOKIA_GATEWAY_ID","HTTP_X_NOKIA_GID","HTTP_X_NOKIA_IMSI","HTTP_X_NOKIA_IPADDRESS","HTTP_X_NOKIA_LOCALSOCKET","HTTP_X_NOKIA_MAXDOWNLINKBITRATE","HTTP_X_NOKIA_MSISDN","HTTP_X_NOKIA_MUSICSHOP_BEARER","HTTP_X_NOKIA_MUSICSHOP_VERSION","HTTP_X_NOKIA_PREPAIDIND","HTTP_X_NOKIA_RAT","HTTP_X_NOKIA_REMOTESOCKET","HTTP_X_NOKIA_ROAMINGIND","HTTP_X_NOKIA_SGSNIPADDRESS","HTTP_X_NOKIA_WIA_ACCEPT_ORIGINAL","HTTP_X_NOKIA_WTLS","HTTP_X_NOVARRA_DEVICE_TYPE","HTTP_X_NOVINET","HTTP_X_NSM_ES_MAG_REQUEST","HTTP_X_NX_APN","HTTP_X_NX_CLID","HTTP_X_NX_CLIP","HTTP_X_ONLINE_HOST","HTTP_X_OPERAMINI_FEATURES","HTTP_X_OPERAMINI_PHONE","HTTP_X_OPERAMINI_PHONE_UA","HTTP_X_ORANGE_APNNAME","HTTP_X_ORANGE_ID","HTTP_X_ORANGE_RAT","HTTP_X_ORIGINAL_HOST","HTTP_X_ORIGINAL_REMOTE_ADDR","HTTP_X_ORIGIN_URL","HTTP_X_ORIG_CLIENT","HTTP_X_OS_PREFS","HTTP_X_PAGEVIEW","HTTP_X_PCS_MDN","HTTP_X_PCS_SUBID","HTTP_X_PL_XVSVRQ_FVAPR","HTTP_X_PL_X_RAPBQVAT","HTTP_X_POWERED_BY","HTTP_X_PROFILE_ID","HTTP_X_PROXY","HTTP_X_PROXY_ADD_ACCEPT_LANGUAGE","HTTP_X_PROXY_ID","HTTP_X_PS3_BROWSER","HTTP_X_PSP_BROWSER","HTTP_X_PSP_PRODUCTCODE","HTTP_X_PTAG","HTTP_X_PVMAC","HTTP_X_RAPMIN_ID","HTTP_X_REAL_IP","HTTP_X_REDIRECT_URL","HTTP_X_REMOTECLIENT_IP","HTTP_X_REMOTE_ADDR","HTTP_X_REQUESTED_URL","HTTP_X_REQUEST_TIME","HTTP_X_RIM_ACCEPT_ENCODING","HTTP_X_RIM_DEFAULT_CHARSET","HTTP_X_RIM_GW_PROPERTIES","HTTP_X_RIM_IF_NONE_MATCH","HTTP_X_RIM_IMAGE_THRESHOLD","HTTP_X_RIM_IMG_SETTING","HTTP_X_RIM_REQUEST_PRIORITY","HTTP_X_RIM_TRANSCODE_CONTENT","HTTP_X_ROAMING","HTTP_X_SBCORELATIONID","HTTP_X_SCREEN_COLORS","HTTP_X_SCREEN_HEIGHT","HTTP_X_SCREEN_RESOLUTION","HTTP_X_SCREEN_WIDTH","HTTP_X_SDC_NOVARRA_END_DATE","HTTP_X_SDC_NOVARRA_OPERATIVE_MODE","HTTP_X_SDC_NOVARRA_TRIAL_FLAG","HTTP_X_SDP_ROAMING","HTTP_X_SERIAL_NUMBER","HTTP_X_SERVER_HOSTNAME","HTTP_X_SGSNIP","HTTP_X_SGSNIP_ID","HTTP_X_SGSN_IP","HTTP_X_SINA_PROXYUSER","HTTP_X_SOURCE_ID","HTTP_X_SUBSCRIBER_INFO","HTTP_X_S_DISPLAY_INFO","HTTP_X_TE","HTTP_X_TEACUP","HTTP_X_TEAMSITE_PREREMAP","HTTP_X_TINYPROXY","HTTP_X_UCOPIA_FORWARDED_FOR","HTTP_X_UP_BEARER_TYPE","HTTP_X_UP_BEAR_TYPE","HTTP_X_UP_CALLING_LINE_ID","HTTP_X_UP_CH_MDN","HTTP_X_UP_CLIENT_ID","HTTP_X_UP_DEVCAP_ACCEPT_LANGUAGE","HTTP_X_UP_DEVCAP_CC","HTTP_X_UP_DEVCAP_CHARSET","HTTP_X_UP_DEVCAP_DRM","HTTP_X_UP_DEVCAP_DRMMODE","HTTP_X_UP_DEVCAP_GUI","HTTP_X_UP_DEVCAP_IMMED_ALERT","HTTP_X_UP_DEVCAP_IMMED_ALERX_UP_DEVCAP_IMMED_ALERT","HTTP_X_UP_DEVCAP_IMMED_ALLERT","HTTP_X_UP_DEVCAP_ISCOLOR","HTTP_X_UP_DEVCAP_MAX_PDU","HTTP_X_UP_DEVCAP_MSIZE","HTTP_X_UP_DEVCAP_MULTIMEDIA","HTTP_X_UP_DEVCAP_NONATTACHMENT","HTTP_X_UP_DEVCAP_NUMSFTKEYS","HTTP_X_UP_DEVCAP_NUMSOFTKEYS","HTTP_X_UP_DEVCAP_NUMSOFTKEYX_UP_DEVCAP_NUMSOFTKEYS","HTTP_X_UP_DEVCAP_NUM_SOFTKEYS","HTTP_X_UP_DEVCAP_POST_CHARSET","HTTP_X_UP_DEVCAP_QVGA","HTTP_X_UP_DEVCAP_SCREENCHARS","HTTP_X_UP_DEVCAP_SCREENCHARX_UP_DEVCAP_SCREENCHARS","HTTP_X_UP_DEVCAP_SCREENDEPTH","HTTP_X_UP_DEVCAP_SCREENDEPTX_UP_DEVCAP_SCREENDEPTH","HTTP_X_UP_DEVCAP_SCREENPIXELS","HTTP_X_UP_DEVCAP_SCREENPIXEX_UP_DEVCAP_SCREENPIXELS","HTTP_X_UP_DEVCAP_SCREEN_CHARS","HTTP_X_UP_DEVCAP_SMARTDIALING","HTTP_X_UP_DEVCAP_SOFTKEYSIZE","HTTP_X_UP_DEVCAP_SOFTKEYSIZX_UP_DEVCAP_SOFTKEYSIZE","HTTP_X_UP_DEVCAP_TITLEBAR","HTTP_X_UP_DEVCAP_TP","HTTP_X_UP_DEVCAP_ZONE","HTTP_X_UP_FAX_ACCEPTS","HTTP_X_UP_FAX_ENCODINGS","HTTP_X_UP_FAX_LIMIT","HTTP_X_UP_FORWARDED_FOR","HTTP_X_UP_LSID","HTTP_X_UP_NAI","HTTP_X_UP_OPERATOR","HTTP_X_UP_PROXY_ENABLE_TRUST","HTTP_X_UP_PROXY_PUSH_SEQ","HTTP_X_UP_SGSN_IP","HTTP_X_UP_SUBNO","HTTP_X_UP_SUBSCRIBER_COI","HTTP_X_UP_SUBSCRIBER_COS","HTTP_X_UP_TELSTRA_UID","HTTP_X_UP_TPD_SESSION_HEADERS","HTTP_X_UP_UPLINK","HTTP_X_UP_WAPPUSH_SECURE","HTTP_X_UP_WAPPUSH_UNSECURE","HTTP_X_UP_WTLS_INFO","HTTP_X_USER_ID","HTTP_X_VF_USER_ID","HTTP_X_VIVO_MIN","HTTP_X_VODAFONE_3GPDPCONTEXT","HTTP_X_WAPCLI","HTTP_X_WAPDEVCAPMAXSDU","HTTP_X_WAPIPADDR","HTTP_X_WAPSECURE","HTTP_X_WAPSESSIONINFO","HTTP_X_WAP_BEARERINFO","HTTP_X_WAP_CLIENTID","HTTP_X_WAP_CLIENT_IP","HTTP_X_WAP_CLIENT_SDU_SIZE","HTTP_X_WAP_FH_SUBSCRIBER_INFO","HTTP_X_WAP_GATEWAY","HTTP_X_WAP_LANG","HTTP_X_WAP_MSISDN","HTTP_X_WAP_NETWORK_CLIENT_IP","HTTP_X_WAP_NETWORK_CLIENT_MSISDN","HTTP_X_WAP_NETWORK_CLIENT_PORT","HTTP_X_WAP_PERSONALIZATION","HTTP_X_WAP_PORT","HTTP_X_WAP_PROFILE","HTTP_X_WAP_PROFILE_DIFF","HTTP_X_WAP_PROXY_COOKIE","HTTP_X_WAP_PROXY_IP","HTTP_X_WAP_SESSION_ID","HTTP_X_WAP_SUBSCRIBER_PROFILE","HTTP_X_WAP_TOD","HTTP_X_WAP_TOD_CODED","HTTP_X_WAP_USERID","HTTP_X_WAP_VERSION","HTTP_X_WAP_WSP_ID","HTTP_X_WAP_WSP_PORT_RANGE","HTTP_X_WAP_WTLSENCRYPTIONTYPE","HTTP_X_WAP_XID","HTTP_X_WSB_CLI","HTTP_X_WSB_CONTEXTID","HTTP_X_WSB_LANGUAGE","HTTP_X_WSB_USERID","HTTP_X_WTE_APN","HTTP_X_WTE_BEARER","HTTP_X_WTE_MSISDN","HTTP_X_XORWARDED_FOR","HTTP_X_XXY_CONNECTION","HTTP_X_X_WAP_TOD","HTTP_X_YAHOO_PROXY","HTTP_X_ZIPCODE","HTTP_X_ZTGO_BEARERINFO","HTTP_X_ZTGO_WTLSENCRYPTIONTYPE","HTTP_YAHOOREMOTEIP","HTTP_YA_COLOR","HTTP__","HTTP__FRI_NOV_16_07","HTTP__FRI_OCT_19_20","HTTP__LINKS","HTTP__MAGAZINE","HTTP__MON_NOV_19_07","HTTP__MON_NOV_19_09","HTTP__MON_OCT_15_13","HTTP__PROFILEL___SOFTWAREPLATFORM","HTTP__RAPMIN","HTTP__SAT_NOV_17_15","HTTP__SUN_NOV__4_19","HTTP__THU_NOV_22_14","HTTP__TUE_NOV_27_14","HTTP__WAP_PROFILE","HTTP_____","HTTP______CACHE_CONTROL","HTTP________","HTTP_________________","HTTP_~~~~~~~","HTTP_~~~~~~~~~~~~~~~","IFS","IS_SUBREQ","Keep-Alive","MACHTYPE","MAILCHECK","MSISDN","MT-PROXY-ID","Max-Forwards","OSTYPE","P3P","PATH","PERL5OPT","PHP_AUTH_PW","PHP_AUTH_USER","PHP_SELF","PROXY_CONNECTION","PS4","Proxy-Authorization","QUERY_STRING","RAW_POST_DATA","REDIRECT_QUERY_STRING","REDIRECT_REDIRECT_REDIRECT_STATUS","REDIRECT_REDIRECT_STATUS","REDIRECT_REQUEST_METHOD","REDIRECT_STATUS","REDIRECT_URL","REDIRECT_nokeepalive","REMOTE_ADDR","REMOTE_PORT","REQUEST_METHOD","REQUEST_TIME","REQUEST_URI","Referer","Referrer","SCRIPT_FILENAME","SCRIPT_NAME","SERVER_ADDR","SERVER_ADMIN","SERVER_NAME","SERVER_PORT","SERVER_PROTOCOL","SERVER_SIGNATURE","SERVER_SOFTWARE","Strict-Transport-Security","TE","TERM","TZ","Transfer-Encoding","User-Agent","User-IP","UserIP","Username","VIA","Vary","WWW-Authenticate","Warning","X-APN-ID","X-Authenicated-User","X-Autopager","X-CC-ID","X-Client-IP","X-Cluster-Client-IP","X-Content-Type-Options","X-D-Forwarder","X-Do-Not-Track","X-FORWARDED-FOR","X-FORWARDED-HOST","X-FORWARDED-PROTO","X-FORWARDED-SERVER","X-Frame-Options","X-GGSNIP","X-IMForwards","X-IMSI","X-Livetool","X-MSP-AG","X-MSP-MSISDN","X-MSP-RAT","X-McProxyFilter","X-NAI-ID","X-NAS-IP","X-Network-Info","X-Network-Type","X-Nokia-Ipaddress","X-OperaMini-Features","X-OperaMini-Phone","X-OperaMini-Phone-UA","X-OperaMini-UA","X-PID","X-PROXY-ID","X-Powered-By","X-ProcessAndThread","X-Real-IP","X-Requested-With","X-SGSNIP","X-Saucer","X-SlipStream-Username","X-TM-Via","X-Teacup","X-UP-FORWARDED-FOR","X-Varnish","X-Via","X-WAP","X-XSS-Protection","X-lori-time-1","XID","XROXY_CONNECTION","X_AUTH_PRIVATE_INFO","X_AUTH_VERIFIED","X_FORWARDED_FOR","X_NAS_IP","X_PATH_TRANSLATED_OUTCOME","X_SERVER_SCHEME","YahooRemoteIP","YahooRemoteIPSig","ZHTTP_CACHE_CONTROL","no_referer","nokeepalive","x-bluecoat-via","x-charging-id","x-codemux-client","x-drutt-client-ip","x-ebo-ua","x-fcck","x-fw2-identity","x-icap-version","x-insight","x-power-cache","x-tickcount","x-up-subno","x2-toolbar-data","HTTP_BOTNAME","HTTP_MIME_VERSION","HTTP_PROBIXPBCONTEXT","HTTP_PROBIXPBSIGNATURE","HTTP_PROBIXPBVERSION","HTTP_X_AWG_CLIENT_EX_INFO","HTTP_X_AWG_CLIENT_PROTOCOL_VERSION","HTTP_X_AWG_CLIENT_VERSION","HTTP_X_MOZ_IS_FEED","HTTP_X_PROCESSANDTHREAD","Content-MD5","Age","Allow","Accept-Ranges","Content-Range","Date","Last-Modified","Expires","Proxy-Authenticate","Retry-After","Set-Cookie","Trailer","Accept-Resource-Priority","Accept-Language","Accept-Encoding","Accept-Contact","Alert-Info","Allow-Events","Answer-Mode","Authentication-Info","Authorization","Call-ID","Call-Info","Contact","Content-Disposition","Content-Encoding","Content-Language","Content-Length","CSeq","Encryption","Error-Info","Event","Flow-Timer","From","Hide","History-Info","Identity","Identity-Info","In-Reply-To","Join","Max-Breadth","MIME-Version","Min-Expires","Min-SE","Organization","P-Access-Network-Info","P-Answer-State","P-Asserted-Identity","P-Asserted-Service","P-Associated-URI","P-Called-Party-ID","P-Charging-Function-Addresses","P-Charging-Vector","P-DCS-Billing-Info","P-DCS-LAES","P-DCS-OSPS","P-DCS-Redirect","P-DCS-Trace-Party-ID","P-Early-Media","P-Media-Authorization","P-Preferred-Identity","P-Preferred-Service","P-Profile-Key","P-Refused-URI-List","P-Served-User","P-User-Database","P-Visited-Network-ID","Path","Permission-Missing","Policy-Contact","Policy-ID","Priority","Priv-Answer-Mode","Privacy","Proxy-Require","RAck","Reason","Record-Route","Refer-Sub","Referred-By","Replaces","Resource-Priority","Response-Key","Route","RSeq","Security-Client","Security-Server","Security-Verify","Server","Service-Route","Session-Expires","SIP-ETag","SIP-If-Match","Subject","Subscription-State","Supported","Suppress-If-Match","Target-Dialog","Timestamp","To","Trigger-Consent","Unsupported","Via","100rel.","answermode","early-session","eventlist","from-change","gin","gruu","histinfo","ice","join","multiple-refer","norefersub","outbound","path","precondition","pref","privacy","recipient-list-invite","recipient-list-message","recipient-list-subscribe","replaces","resource-priority","sdp-anat","sec-agree","tdialog","timer","REQUEST_TIME_FLOAT","ChargeTo","If-Modified-Since","Pragma","UA-Color","UA-OS","UA-CPU","http-on-modify-request","X-hello","HTTP_METHOD","HTTP_RAW_POST_DATA","Request_URI","FROM","Host","If-Match","If-None-Match","If-Range","If-Unmodified-Since","Range","REFERER","X-PHP-Version","ORIGINAL_URI","x-amz-date","x-amz-security-token","ApiVersion","Location","Upgrade","Allowed","Connect","Delete","Options","Proxy-Connection","Public","Private","Request-Range","Trace","Uri","X-Flash-Version","Status","HTTP_SHIBSPOOFCHECK","HTTP_SHIBAPPLICATIONID","HTTP_SHIBSESSIONID","HTTP_SHIBIDENTITYPROVIDER","HTTP_SHIBAUTHENTICATIONINSTANT","HTTP_SHIBAUTHNCONTEXTDECL","name","Orig-URL","Cos-Name","DRM-Version","X-Palm-Carrier","profile","X-Cache","HTTP_DNT","PHP_AUTH_DIGEST","AUTH_TYPE","HTTP_X_INSIGHT","ORIG_PATH_INFO","PATH_TRANSLATED","x-xss-protection","X-FB-Debug","x-content-type-options","x-frame-options","Access-Control-Allow-Origin","X-Cnection","x-att-deviceid","Refresh","Front-End-Https","X-UA-Compatible","X-Subliminal","X-HTTP-Method-Override","X-Request-Id","X-Runtime","X-Content-Digest","X-Rack-Cache","X-Amz-Cf-Id","X-TM-AS-Product-Ver","X-TM-AS-Result","X-imss-scan-details","X-TM-AS-User-Approved-Sender","X-TM-AS-User-Blocked-Sender","X-TM-AS-user-Blocked-Sender","X-TM-AS-Result-Xfilter","X-MS-Exchange-Forest-RulesExecuted","X-MS-Exchange-Organization-Antispam-Report","X-MS-Exchange-Organization-AuthAs","X-MS-Exchange-Organization-AuthDomain","X-MS-Exchange-Organization-AuthMechanism","X-MS-Exchange-Organization-AuthSource","X-MS-Exchange-Organization-Journal-Report","X-MS-Exchange-Organization-OriginalArrivalTime","X-MS-Exchange-Organization-OriginalSize","X-MS-Exchange-Organization-Original-Scl","X-MS-Exchange-Organization-PCL","X-MS-Exchange-Organization-Quarantine","X-MS-Exchange-Organization-SCL","X-MS-Exchange-Organization-SenderIdResult","X-MS-Exchange-Organization","X-MimeOLE","X-Spam-Status","X-Account-Key","X-Mozilla-Status2","X-Mozilla-Status","X-Mailer","X-Original-To","X-Quarantine-ID","X-DSNContext","X-AntiVirus","X-ME-UUID","X-Wf-Protocol-1","X-Wf-1-Plugin-1","X-Wf-1-Structure-1","X-Wf-1-1-1-1","X-Wf-1-1-1-2","X-Wf-1-1-1-3","X-Wf","X-Wf-Config","X-Wf-Header","X-Wf-ID","X-Wf-Log","X-Wf-Error","X-FirePHP-Version","X-FB","X-Source","X-Source-Args","X-Source-Dir","X-Spam","X-Failed-Recipients","X-AOL-IP","X-BigFish","X-Disclaimer","X-Ninja-PIM","X-Ninja","X-AntiAbuse","X-Antivirus-Status","X-Antivirus","X-BeenThere","X-DoneThat","X-Eagle-Notice","X-MIMEOLE","X-OriginalArrivalTime","X-Originating-Email","X-Originating-IP","X-Originating-Server","X-SMTP-Server-Queue","X-SMTP-Server-Sender","X-Scanned-By","X-Sender","X-UIDL","X-USER_IP","X-Version","X-Warning","X-Yahoo","X-Yahoo-Calendar-lid","X-Yahoo-Newman-Id","X-Yahoo-Newman-Prope","X-me-spamlevel","X-me-spamrating","X-remove","X-ELINK-Trace","X-MSMAIL-Priority","X-Brightmail-Tracker","X-Brightmail","X-Brightmail-scanned","X-EN","X-EN-AuthUser","X-EN-UserInfo","X-Enigmail-Version","X-Env-Sender","X-Flow-Control","X-Google-Sender-Auth","X-IronPort-AV","X-IronPort-Anti-Spam","X-MB-Message-Source","X-MB-Message-Type","X-MDRemoteIP","X-MIMETrack","X-MS-Has-Attach","X-Mailman-Approved-A","X-Mailman-Version","X-Msg-Ref","X-NAIMIME-Disclaimer","X-NAIMIME-Modified","X-Ninja-AttachmentFi","X-Nokia-AV","X-Proofpoint-Virus-V","X-Proofpoint-Spam-De","X-Provags-ID","X-Provags-ID2","X-Return-Path","X-Scan-Signature","X-Scanner","X-Sender-IP","X-Spam-Processed","X-StarScan-Version","X-Tiga.PelayanWeb.co","X-URL","X-UVA-Virus-Scanned","X-UVA-Vac-OK","X-VirusChecked","X-VisionSystems-Mail","X-WiganSS","X-Y-GMX-Trusted","X-YMail-OSG","X-bsdisclaimer","X-eXpurgate-Category","X-eXpurgate-ID","X-imss-approveListMa","X-imss-result","X-imss-version","X-Eudora-Options","X-Accel-Redirect","X-Accel-Limit-Rate","X-Accel-Buffering","X-Accel-Charset","X-Archived-At","Archived-At","X-Spam-hits","X-No-Archive","X-gazette-tag","gazette-tag","X-Enigmail-Supports","X-Spam-Score","X-Robots-Tag","x-pstn-levels","x-pstn-settings","X-FreeTDM-CIC","x-assistly-customer-email","x-assistly-interaction-direction","X-Aspnet-Version","X-Freetdm-RDNIS-NADI","X-FreeTDM-CallerNumber","X-FreeTDM-CallerName","X-FreeTDM-CPC","X-FreeTDM-Screen","X-FreeTDM-Presentation","X-FreeTDM-CallReference","X-FreeTDM-SpanNumber","X-FreeTDM-ChanNumber","X-FreeTDM-SpanName","X-FreeTDM-OPC","X-FreeTDM-ANI-NADI","X-FreeTDM-DNIS-NADI","X-FreeTDM-RDNIS","X-FreeTDM-RDNIS-Plan","X-FreeTDM-RDNIS-Screen","X-FreeTDM-RDNIS-Presentation","X-FreeTDM-GN","X-FreeTDM-GN-NumQual","X-FreeTDM-GN-NADI","X-FreeTDM-GN-Screen","X-FreeTDM-GN-Presentation","X-FreeTDM-GN-Plan","X-FreeTDM-GN-NumInComp","X-FreeTDM-LOC","X-FreeTDM-LOC-Screen","X-FreeTDM-LOC-Presentation","X-FreeTDM-LOC-NADI","X-FreeTDM-RDINF-Indicator","X-FreeTDM-RDINF-OrigReason","X-FreeTDM-RDINF-Count","X-FreeTDM-RDINF-Reason","X-FreeTDM-OCN","X-FreeTDM-OCN-NADI","X-FreeTDM-OCN-Plan","X-FreeTDM-OCN-Presentation","x-goog-acl","x-goog-api-version","x-goog-copy-source","x-goog-copy-source-if-match","x-goog-copy-source-if-none-match","x-goog-copy-source-if-modified-since","x-goog-copy-source-if-unmodified-since","x-goog-date","x-goog-metadata-directive","x-goog-meta-","x-goog-meta-project-name","x-goog-meta-project-number","x-goog-meta-project-manager","x-goog-meta-team","x-goog-meta-message","x-goog-meta-config","x-goog-project-id","x-goog-resumable","x-goog-meta-version","x-goog-sequence-number","x-goog-if-sequence-number-match","x-goog-meta-error","X-FB-Error","X-FB-Version","HTTP_MIMETYPE","HTTP_BODY_MAXLENGTH","HTTP_VERIFY_CERT","HTTP_VERBOSE_THROTTLE","X-SecondLife-Shard","X-SecondLife-Object-Name","X-SecondLife-Object-Key","X-SecondLife-Region","X-SecondLife-Local-Position","X-SecondLife-Local-Rotation","X-SecondLife-Local-Velocity","X-SecondLife-Owner-Name","X-SecondLife-Owner-Key","HTTP_X_SECONDLIFE_OBJECT_NAME","X-Firefox-Spdy","X-Rate-Limit-Limit","X-Rate-Limit-Remaining","X-Rate-Limit-Reset","X-Twitter-Client","X-Twitter-Client-Version","X-Twitter-Client-URL","OAuth","oauth_nonce","oauth_callback","oauth_signature_method","oauth_timestamp","oauth_consumer_key","oauth_signature","oauth_version","oauth_token","oauth_token_secret","oauth_callback_confirmed","X-Auth-Service-Provider","X-Verify-Credentials-Authorization","x_auth_service_provider","x_verify_credentials_authorization","X-FeatureRateLimit-Limit","X-FeatureRateLimit-Remaining","X-FeatureRateLimit-Reset","Abuse-Reports-To","Also-Control","Alternate-Recipient","Apparently-To","Approved","Approved-By","Article-Names","Article-Updates","Autoforwarded","Auto-Forwarded","bcc","Cache-Post-Path","cc","Comments","Content-Alias","Content-Alternative","Content-Base","Content-Class","Content-Conversion","Content-Description","Content-Features","Content-ID","Content-Identifier","Content-Location","Content-Return","Content-SGML-Entity","Content-Transfer-Encoding","Conversion","Conversion-With-Loss","Delivered-To","Delivery-Date","Discarded-X400-IPMS-Extensions","Discarded-X400-MTS-Extensions","Disclose-Recipients","Disposition-Notification-Options","Disposition-Notification-To","Distribution","DL-Expansion-History-Indication","Encoding","Errors-To","Envelope-ID","Expiry-Date","Fax","Fcc","Followup-To","For-Approval","For-Comment","For-Handling","Generate-Delivery-Report","Importance","Incomplete-Copy","Injector-Info","Keywords","Language","Lines","List-Archive","List-Digest","List-ID","List-Owner","List-Post","List-Software","List-Subscribe","List-Unsubscribe","List-URL","Mail-Copies-To","Mail-Reply-Requested-By","Mail-System-Version","Mailer","Mailing-List","Message-ID","Message-Type","Newsgroups","NNTP-Posting-Date","NNTP-Posting-Host","NNTP-Posting-Time","NNTP-Proxy-Relay","Obsoletes","Old-Date","Old-X-Envelope-From","Old-X-Envelope-To","Organisation","Organization","Original-Encoded-Information-Types","Original-Recipient","Originating-Client","Originator","Originator-Info","Phone","PICS-Label","Posted-To","Precedence","Prevent-NonDelivery-Report","Read-Receipt-To","Received","References","Reply-By","Resent-bcc","Resent-cc","Resent-Date","Resent-From","Resent-Message-ID","Resent-Reply-To","Resent-Sender","Resent-Subject","Resent-To","Return-Path","Return-Receipt-Requested","Return-Receipt-To","See-Also","Sender","Sensitivity","Speech-Act","Summary","Supersedes","Telefax","To","Translated-By","Translation-Of","X-Abuse-Info","X-Accept-Language","X-Admin","X-Article-Creation-Date","X-Attribution","X-Authenticated-IP","X-Authenticated-Sender","X-Authentication-Warning","X-Comments","X-Comments2","X-Comments3","X-Complaints-To","X-Confirm-reading-to","X-Envelope-From","X-Envelope-To","X-Face","X-Flags","X-Folder","X-Http-Proxy","X-Http-User-Agent","X-IMAP","X-Last-Updated","X-List-Host","X-Listserver","X-Loop","X-Mailer-Info","X-Mailing-List","X-MIME-Autoconverted","X-MyDeja-Info","X-Newsreader","X-NNTP-Posting-Host","X-Notice","X-Orig-Message-ID","X-Original-Envelope-From","X-Original-NNTP-Posting-Host","X-Original-Trace","X-PMFLAGS","X-Posted-By","X-Posting-Agent","X-Priority","X-RCPT-TO","X-Report","X-Report-Abuse-To","X-Server-Date","X-Trace","X-UML-Sequence","X-URI","X-X-Sender","X400-Content-Return","XPident","Xref","X-Anagram","X-Eric-Conspiracy","DL-Expansion-History","Cancel-Lock","Cancel-Key","X-Api-Error","X-Api-Error-Code","X-Api-Error-Hint","X-Auth-Login","X-Auth-Key","x-amz-id-2","x-amz-request-id","HTTP_X_TWILIO_SIGNATURE","X-WNS-RequestForStatus","X-WNS-Tag","X-WNS-TTL","X-WNS-Debug-Trace","X-WNS-DeviceConnectionStatus","X-WNS-Error-Description","X-WNS-Msg-ID","X-WNS-NotificationStatus","X-Delete-After","X-Delete-At","X-WNS-Type","X-WNS-Cache-Policy","X-Forwarded-Proto","X-SendFile2","x-amz-grant-read","x-amz-grant-full-control","x-amz-meta-foo","x-object-meta-access-control-allow-origin","x-object","UAProf","X-AspNetMvc-Version","mod_xsendfile","X-CDN_Management_Url","XSendFile","XSendFileAllowAbove","X-Cloud-Client-Specification-Version","X-CloudPrint-Proxy","x-ms-version","x-auth-user","x-auth-key","X-Auth-Token","XSendFilePath","X-TTL","X-CDN-Enabled","X-Log-Retention","X-wurfl-ld","X-wurfl-RootId","X-wurfl-IsDevRoot","X-wurfl-cap-brand-name","X-wurfl-cap-device_os","X-wurfl-cap-device_os-version","X-wurfl-cap-is_tablet","X-wurfl-cap-is_wireless_device","X-wurfl-cap-marketing_name","X-wurfl-cap-model_name","X-wurfl-ux-full-desktop","X-bmifolder","X-Kinvey-Content-Type","X-Deltacloud","X-Deltacloud-BlobType","X-Kinvey","X-Deltacloud-SegmentedBlob","X-Deltacloud-Driver","X-Deltacloud-SegmentOrder","X-Kinvey-API-Version","allow-x-send-file","bin-environment","X-Accell","X-Accell-Redirect","X-Torrent","X-Twilio-Accountsid","X-Twilio-Apiversion","X-Twilio-From","X-Twilio-Fromcity","X-Twilio-Fromcountry","X-Twilio-Fromstate","X-Twilio-Fromzip","X-Twilio-Smsmessagesid","X-Twilio-Smssid","X-Twilio-To","X-Twilio-Tocity","X-Twilio-Tocountry","X-Twilio-Tostate","X-Twilio-Tozip","X-CSRF-TOKEN","X-XSRF-TOKEN","HEADER_X_FORWARDED_ALL"];
sort($ServerHeaders);
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/obscure-header-list.css" />

<div class="container-fluid ohl-box">
<div class="row instruct-box">
<div class="col-sm-12">The following is a list of Server Headers that have been sent to request this page</div>
</div>
<?php
$baddies = ['"', "'"];

foreach ($ServerHeaders as $SH) {
  $val = trim($SH);

  if (isset($_SERVER[$val]) && !empty($_SERVER[$val])) {
    echo "<div class=\"row headers-box\">";
    echo "<div class=\"col-sm-12 headers-value\">".$val."</div>";
    echo "<div class=\"col-sm-12\">'".str_replace($baddies, "", strip_tags($_SERVER[$val]))."'</div>";
    echo "</div>";
  }
}

unset($baddies);
unset($ServerHeaders);
?>
</div>