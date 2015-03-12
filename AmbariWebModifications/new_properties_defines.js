/**
 * 
 */

{
  "id": "site property",      
  "name": "authentication_method",      
  "displayName": "Authentication method", 
  "defaultValue": "NONE",  
  "displayType": "radio button",     
  "radioName": "authentication-method",    
  "options": [   
    {
      displayName: 'LDAP',        
      foreignKeys: ['ldap_userDNpattern', 'ldap_url']         
    },
    {
      displayName: 'ACTIVE_DIRECTORY',
      foreignKeys: ['ldap_ad_domain', 'ldap_ad_url']
    },
    {
     displayName: 'NONE'
    }
  ],
  "isReconfigurable": true,
  "isOverridable": false,
  "isVisible": true,   
  "serviceName": "SCRIPT_MASTER",   
  "filename": "script-master-testing-config.xml",   
  "category": "AuthenticationSettings" 
},		
{
  "id" : "site property",
  "name" : "ldap_url",
  "displayName" : "LDAP url",
  "isReconfigurable" : true,
  "isOverridable" : false,
  "isVisible" : true,
  "serviceName" : "SCRIPT_MASTER",
  "filename" : "script-master-testing-config.xml",
  "category" : "AuthenticationSettings"
}, 
{
  "id" : "site property",
  "name" : "xa_ldap_userDNpattern",
  "displayName" : "LDAP user pattern",
  "isReconfigurable" : true,
  "isOverridable" : false,
  "isVisible" : true,
  "serviceName" : "SCRIPT_MASTER",
  "filename" : "script-master-testing-config.xml",
  "category" : "AuthenticationSettings"
},
{
  "id" : "site property",
  "name" : "ldap_ad_url",
  "displayName" : "AD url",
  "isReconfigurable" : true,
  "isOverridable" : false,
  "isVisible" : true,
  "serviceName" : "SCRIPT_MASTER",
  "filename" : "script-master-testing-config.xml",
  "category" : "AuthenticationSettings"
}, 
{
  "id" : "site property",
  "name" : "ldap_ad_domain",
  "displayName" : "AD domain",
  "isReconfigurable" : true,
  "isOverridable" : false,
  "isVisible" : true,
  "serviceName" : "SCRIPT_MASTER",
  "filename" : "script-master-testing-config.xml",
  "category" : "AuthenticationSettings"
},
{
  "id" : "site property",
  "name" : "hdfs_default_fs",
  "displayName" : "HDFS connection",
  "isReconfigurable" : true,
  "isOverridable" : false,
  "isVisible" : true,
  "serviceName" : "SCRIPT_MASTER",
  "filename" : "script-master-testing-config.xml",
  "category" : "HDFSConnectionSettings"
}