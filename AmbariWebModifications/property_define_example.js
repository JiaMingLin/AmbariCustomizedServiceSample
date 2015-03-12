/**
 * 
 */
{
    "id": "site property",      // is either 'puppet var' or 'site property'
    "name": "authentication_method",      // The name of the property, same with the one in "script-master-testing-config.xml" in our example.
    "displayName": "Authentication method", // The display name of this property.
    "defaultValue": "NONE",  // The default value.
    "displayType": "radio button",
    // This can be 'string', 'number', 'int' for integer, 'directory', 'radio button', 'check box'.
    // In this example, we set it to be radio button, because we want to select authentication between "LDAP", "AD", "UNIX" or "NONE".  
    "radioName": "authentication-method",    
    "options": [    // The options of radio button.
      {
        displayName: 'LDAP',
        // The display name and value of the option.
        foreignKeys: ['ldap_userDNpattern', 'ldap_groupRoleAttribute']
        // Specify which properties would be visible while the button is on clicking. 
      },
      {
        displayName: 'ACTIVE_DIRECTORY',
        foreignKeys: ['ldap_ad_domain', 'ldap_ad_url']
      }
    ],
    "isReconfigurable": true,
    "isOverridable": false,
    "isVisible": true,   // Specify the property is visible or not.
    "serviceName": "SCRIPT_MASTER",   // Specify the service name, same with the value of customized package name. 
    "filename": "script-master-testing-config.xml",   // the configuration file name.
    "category": "AuthenticationSettings"   // The category of this property.
}