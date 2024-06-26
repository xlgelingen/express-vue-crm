const PREFIX = `${import.meta.env.VITE_APP_HOST}`
const WEB_PREFIX = `${PREFIX}/api/web`
const ADMIN_PREFIX = `${PREFIX}/api/admin`

export default {
  ossToken: `${PREFIX}/api/file/alioss-token`,
  ossStore: `${PREFIX}/api/file/alioss-store`,
  articles: `${WEB_PREFIX}/article/article-info`, 
  users: `${ADMIN_PREFIX}/users/user-info`,
  addUser: `${ADMIN_PREFIX}/users/create`,
  editUser:`${ADMIN_PREFIX}/users/edit`,
  roles: `${ADMIN_PREFIX}/roles/role-info`,
  addRole: `${ADMIN_PREFIX}/roles/create`,
  editRole:`${ADMIN_PREFIX}/roles/edit`,
  clues: `${ADMIN_PREFIX}/clues/clue-info`,
  addClue: `${ADMIN_PREFIX}/clues/create`,
  editClue: `${ADMIN_PREFIX}/clues/edit`,
  clue_logs: `${ADMIN_PREFIX}/clue_log/log-info`,
  addLog: `${ADMIN_PREFIX}/clue_log/create`,
  permissions: `${ADMIN_PREFIX}/permissions/permission-info`,
  phoneLogin: `${PREFIX}/api/login/phone`,
  accountLogin: `${PREFIX}/api/login/account`,
  // logout: `${PREFIX}/api/logout`,
  varifyToken: `${PREFIX}/api/token`,
}