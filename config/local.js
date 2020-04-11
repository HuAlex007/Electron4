
module.exports = {

  // The full base url at which your site will be primarily available.
  // Include an http:// prefix
  // ex. 'http://my-site.com'
  appUrl: 'SITE_URL',

  auth: {
    // Provide a set of credentials that can be used to access the admin interface.
    static: {
      username: 'AlexHu',
      password: 'pw123456'
    },
    // You can also specify an ldap connection that can be used for authentication.
    //ldap: {
    //  usernameField: 'USERNAME_FIELD', // Key at which the username is stored
    //  server: {
    //    url: 'ldap://LDAP_SERVER_FQDN:389',
    //    bindDn: 'INSERT_LDAP_SERVICE_ACCOUNT_USERNAME_HERE',
    //    bindCredentials: 'INSERT_PASSWORD_HERE',
    //    searchBase: 'USER_SEARCH_SPACE', // ex: ou=Our Users,dc=companyname,dc=com
    //    searchFilter: '(USERNAME_FIELD={{username}})'
    //  }
    //}
  },

  jwt: {
    // Recommended: 63 random alpha-numeric characters for secret
    // Generate using: https://www.grc.com/passwords.htm
    token_secret: 'CEA763D855B8832B98ECAB319482BE434811B91E2AA7105ACD9539E1A4F76A6F'
  },

  connections: {
    postgresql: {
      adapter: 'sails-postgresql',
      host: 'DATABASE_HOST',
      user: 'DATABASE_USERNAME',
      password: 'DATABASE_PASSWORD',
      database: 'MAIN_DATABASE_NAME'
    }
  },

  session: {
    // Recommended: 63 random alpha-numeric characters for secret
    // Generate using: https://www.grc.com/passwords.htm
    secret: 'SESSION_SECRET',
    database: 'SESSION_DATABASE_NAME',
    host: 'DATABASE_HOST',
    user: 'DATABASE_USERNAME',
    password: 'DATABASE_PASSWORD',
    port: 5432
  },

  files: {
    // Folder must exist and user running the server must have adequate perms
    dirname: 'PATH_FOR_ASSETS',
    // Maximum allowed file size in bytes
    // Defaults to 500MB
    // maxBytes: 524288000
  }

  /***************************************************************************
   * Your SSL certificate and key, if you want to be able to serve HTTP      *
   * responses over https:// and/or use websockets over the wss:// protocol  *
   * (recommended for HTTP, strongly encouraged for WebSockets)              *
   *                                                                         *
   * In this example, we'll assume you created a folder in your project,     *
   * `config/ssl` and dumped your certificate/key files there:               *
   ***************************************************************************/

  // ssl: {
  //   ca: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl_gd_bundle.crt'),
  //   key: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl.key'),
  //   cert: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl.crt')
  // },

  /***************************************************************************
   * The `port` setting determines which TCP port your app will be           *
   * deployed on.                                                            *
   *                                                                         *
   * Ports are a transport-layer concept designed to allow many different    *
   * networking applications run at the same time on a single computer.      *
   * More about ports:                                                       *
   * http://en.wikipedia.org/wiki/Port_(computer_networking)                 *
   *                                                                         *
   * By default, if it's set, Sails uses the `PORT` environment variable.    *
   * Otherwise it falls back to port 1337.                                   *
   *                                                                         *
   * In env/production.js, you'll probably want to change this setting       *
   * to 80 (http://) or 443 (https://) if you have an SSL certificate        *
   ***************************************************************************/

  // port: process.env.PORT || 1337,

  /***************************************************************************
   * The runtime "environment" of your Sails app is either typically         *
   * 'development' or 'production'.                                          *
   *                                                                         *
   * In development, your Sails app will go out of its way to help you       *
   * (for instance you will receive more descriptive error and               *
   * debugging output)                                                       *
   *                                                                         *
   * In production, Sails configures itself (and its dependencies) to        *
   * optimize performance. You should always put your app in production mode *
   * before you deploy it to a server.  This helps ensure that your Sails    *
   * app remains stable, performant, and scalable.                           *
   *                                                                         *
   * By default, Sails sets its environment using the `NODE_ENV` environment *
   * variable.  If NODE_ENV is not set, Sails will run in the                *
   * 'development' environment.                                              *
   ***************************************************************************/

  // environment: process.env.NODE_ENV || 'development'

};
