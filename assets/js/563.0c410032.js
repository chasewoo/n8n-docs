(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{2006:function(t,e,l){"use strict";l.r(e);var a=l(27),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"environment-variables"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[t._v("#")]),t._v(" Environment Variables")]),t._v(" "),l("h2",{attrs:{id:"credentials"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#credentials"}},[t._v("#")]),t._v(" Credentials")]),t._v(" "),l("p",[t._v("Enabling overwrites for credentials allows you to set default values for credentials which get automatically prefilled. The user cannot see or change these credentials. The format is "),l("code",[t._v("{ CREDENTIAL_NAME: { PARAMTER: VALUE }}")]),t._v(".")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("CREDENTIALS_OVERWRITE_DATA")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("*")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Overwrites for credentials.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("CREDENTIALS_OVERWRITE_ENDPOINT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The API endpoint to fetch credentials.")])])])]),t._v(" "),l("h2",{attrs:{id:"database"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_TYPE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enum string")]),t._v(": "),l("code",[t._v("sqlite")]),t._v(", "),l("code",[t._v("mariadb")]),t._v(", "),l("code",[t._v("mysqldb")]),t._v(", "),l("code",[t._v("postgresdb")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The type of database to use.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_TABLE_PREFIX")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("*")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Prefix to be used for table names.")])])])]),t._v(" "),l("h3",{attrs:{id:"mysql"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_MYSQLDB_DATABASE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the MySQL database.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_MYSQLDB_HOST")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The MySQL host (e.g. "),l("code",[t._v("localhost")]),t._v(").")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_MYSQLDB_PORT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The MySQL port (e.g. "),l("code",[t._v("3306")]),t._v(").")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_MYSQLDB_USER")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The MySQL user (e.g. "),l("code",[t._v("root")]),t._v(").")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_MYSQLDB_PASSWORD")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The MySQL password.")])])])]),t._v(" "),l("h3",{attrs:{id:"postgres"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#postgres"}},[t._v("#")]),t._v(" Postgres")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_DATABASE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the PostgresDB database.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_HOST")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The PostgresDB host (e.g. "),l("code",[t._v("localhost")]),t._v(").")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_PORT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The PostgresDB port (e.g. "),l("code",[t._v("5432")]),t._v(").")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_USER")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The PostgresDB user (e.g. "),l("code",[t._v("root")]),t._v(").")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_PASSWORD")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The PostgresDB password.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_SCHEMA")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The PostgresDB schema (e.g. "),l("code",[t._v("public")]),t._v(").")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_SSL_CA")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The PostgresDB SSL certificate authority.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_SSL_CERT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The PostgresDB SSL certificate.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_SSL_KEY")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The PostgresDB SSL key.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("If unauthorized SSL connections should be rejected.")])])])]),t._v(" "),l("h3",{attrs:{id:"sqlite"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sqlite"}},[t._v("#")]),t._v(" SQLite")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("DB_SQLITE_VACUUM_ON_STARTUP")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Runs "),l("code",[t._v("VACUUM")]),t._v(" operation on startup to rebuild the database. Reduces file size and optimizes indexes. This is a long running blocking operation and will increase start-up time.")])])])]),t._v(" "),l("h2",{attrs:{id:"deployment"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_PATH")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The path n8n is deployed to.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_HOST")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Host name (e.g. "),l("code",[t._v("localhost")]),t._v(") where n8n can be reached.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_PORT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The HTTP port (e.g. "),l("code",[t._v("5678")]),t._v(") where n8n can be reached.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_LISTEN_ADDRESS")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The IP address n8n should listen on.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_PROTOCOL")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enum string")]),t._v(": "),l("code",[t._v("http")]),t._v(", "),l("code",[t._v("https")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The protocol used to reach n8n.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_SSL_KEY")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The SSL Key for HTTPS protocol.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_SSL_CERT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The SSL certificate for HTTPS protocol.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_VERSION_NOTIFICATIONS_ENABLED")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("When enables, notifications of new versions and security updates are provided.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_VERSION_NOTIFICATIONS_ENDPOINT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The endpoint where version information is retreived. By default "),l("code",[t._v("https://api.n8n.io/versions/")]),t._v(" is used.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_VERSION_NOTIFICATIONS_INFO_URL")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The URL displayed in the New Versions panel for additional information. By default "),l("code",[t._v("https://docs.n8n.io/getting-started/installation/updating.html")]),t._v(" is used.")])])])]),t._v(" "),l("h2",{attrs:{id:"endpoints"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_PAYLOAD_SIZE_MAX")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum payload size in MB.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_METRICS")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether to enable the metrics endpoint.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_METRICS_PREFIX")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Optional prefix to be used for metrics names.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_ENDPOINT_REST")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The path used for REST endpoint.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_ENDPOINT_WEBHOOK")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The path used for webhook endpoint.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_ENDPOINT_WEBHOOK_TEST")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The path used for test-webhook endpoint.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_DISABLE_PRODUCTION_MAIN_PROCESS")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Disable production webhooks from main process. This helps ensures no HTTP traffic load to main process when using webhook-specific processes.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_SKIP_WEBHOOK_DEREGISTRATION_SHUTDOWN")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Deregister webhooks on external services only when workflows are deactivated.")])])])]),t._v(" "),l("h2",{attrs:{id:"external-hooks"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#external-hooks"}},[t._v("#")]),t._v(" External Hooks")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXTERNAL_HOOK_FILES")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('Files containing external hooks. Multiple files can be provided separated by colon ("😊.')])])])]),t._v(" "),l("h2",{attrs:{id:"executions"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#executions"}},[t._v("#")]),t._v(" Executions")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_PROCESS")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enum string")]),t._v(": "),l("code",[t._v("main")]),t._v(", "),l("code",[t._v("own")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether processes are executed in their own process (default) or the main process.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_MODE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enum string")]),t._v(": "),l("code",[t._v("regular")]),t._v(", "),l("code",[t._v("queue")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether processes should run directly (default) or via queue.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_TIMEOUT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The max run time (in seconds) before stopping a workflow execution. Set to "),l("code",[t._v("-1")]),t._v(" to disable.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_TIMEOUT_MAX")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The max execution time (in seconds) that can be set for a workflow individually.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_DATA_SAVE_ON_ERROR")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enum string")]),t._v(": "),l("code",[t._v("all")]),t._v(", "),l("code",[t._v("none")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether execution data is saved on error.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_DATA_SAVE_ON_SUCCESS")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enum string")]),t._v(": "),l("code",[t._v("all")]),t._v(", "),l("code",[t._v("none")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether execution data is saved on success.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_DATA_SAVE_ON_PROGRESS")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether to save progress for each node executed.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether to save data of executions when started manually.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_DATA_PRUNE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether to delete data of past executions on a rolling basis.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_DATA_MAX_AGE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The execution age (in hours) before it is deleted.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("EXECUTIONS_DATA_PRUNE_TIMEOUT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The timeout (in seconds) after execution data has been pruned.")])])])]),t._v(" "),l("h2",{attrs:{id:"logs"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[t._v("#")]),t._v(" Logs")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_LOG_LEVEL")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enum string")]),t._v(": "),l("code",[t._v("info")]),t._v(", "),l("code",[t._v("warn")]),t._v(", "),l("code",[t._v("error")]),t._v(", "),l("code",[t._v("verbose")]),t._v(", "),l("code",[t._v("debug")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Log output level.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_LOG_OUTPUT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enum string")]),t._v(": "),l("code",[t._v("console")]),t._v(", "),l("code",[t._v("file")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Where to output logs. Multiple values can be provided separated by a comma.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_LOG_FILE_COUNT_MAX")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Max number of log files to keep.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_LOG_FILE_SIZE_MAX")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Max size of each log file in MB.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_LOG_FILE_LOCATION")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Log file location. Only used if log output is set to "),l("code",[t._v("file")]),t._v(".")])])])]),t._v(" "),l("h2",{attrs:{id:"nodes"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#nodes"}},[t._v("#")]),t._v(" Nodes")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("NODES_INCLUDE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Specify which nodes to load.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("NODES_EXCLUDE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Specify which nodes not to load.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("NODES_ERROR_TRIGGER_TYPE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Specify which node Node Type to use as Error Trigger.")])])])]),t._v(" "),l("h2",{attrs:{id:"queues"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#queues"}},[t._v("#")]),t._v(" Queues")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("QUEUE_BULL_PREFIX")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Prefix to be used for all queue keys.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("QUEUE_BULL_REDIS_DB")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The Redis database used.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("QUEUE_BULL_REDIS_HOST")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The Redis host (e.g. "),l("code",[t._v("localhost")]),t._v(").")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("QUEUE_BULL_REDIS_PORT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The Redis port used (e.g. "),l("code",[t._v("6379")]),t._v(").")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("QUEUE_BULL_REDIS_PASSWORD")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The Redis password.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("QUEUE_BULL_REDIS_TIMEOUT_THRESHOLD")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The Redis timeout threshold (in seconds).")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("QUEUE_RECOVERY_INTERVAL")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Internal (in seconds) for active polling to the queue to recover from Redis crashes. "),l("code",[t._v("0")]),t._v(" is disabled. May increase Redis traffic significantly.")])])])]),t._v(" "),l("h2",{attrs:{id:"security"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[t._v("#")]),t._v(" Security")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_AUTH_EXCLUDE_ENDPOINTS")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('Additional endpoints to exclude auth checks. Multiple endpoints can be provided separated by a colon ("😊.')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_BASIC_AUTH_ACTIVE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether basic auth should be activated for editor and REST-API access.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_BASIC_AUTH_USER")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the n8n user for basic authentication.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_BASIC_AUTH_PASSWORD")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The password of the n8n user for basic authentication.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_BASIC_AUTH_HASH")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether the basic authentication password is hashed.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_JWT_AUTH_ACTIVE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether JWT authentication should be activated for editor and REST-API access.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_JWT_AUTH_HEADER")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The request header containing a signed JWT.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_JWT_AUTH_HEADER_VALUE_PREFIX")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Optional. The request header value prefix to strip.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_JWKS_URI")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The URI to fetch JWK Set for JWT authentication.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_JWT_ISSUER")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Optional. The expected JWT issuer.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_JWT_NAMESPACE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Optional. The expected JWT namespace.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_JWT_ALLOWED_TENANT")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Optional. The allowed JWT tenant.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("N8N_JWT_ALLOWED_TENANT_KEY")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Optional. The JWT tenant key name to inspect within the JWT namespace.")])])])]),t._v(" "),l("h2",{attrs:{id:"timezone"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#timezone"}},[t._v("#")]),t._v(" Timezone")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("GENERIC_TIMEZONE")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("*")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The timezone to use (e.g. `America/New York). Important for schedule nodes (i.e. Cron).")])])])]),t._v(" "),l("h2",{attrs:{id:"workflows"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#workflows"}},[t._v("#")]),t._v(" Workflows")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("WORKFLOWS_DEFAULT_NAME")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("string")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The default name used for new workflows (e.g. "),l("code",[t._v("My workflow")]),t._v(").")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);