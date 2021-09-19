const {
  host
} = window.location;

/**
 * Environments
 */
let env = 'production'; // Defaults to production
if (process.env.NODE_ENV === 'development' || host.includes('local')) env = 'development';
if (host.includes('stage.')) env = 'stage';


const config = {
  // App Details
  appName: 'React Boilerplate',

  // Build Configuration - eg. Debug or Release?
  isDevEnv: (env === 'development'),
  ENV: env,

  // Date Format
  dateFormat: 'Do MMM YYYY',
};

/**
 * Config object to export
 */
export default config;
