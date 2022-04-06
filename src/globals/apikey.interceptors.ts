export const apiKeyInterceptor = {
  onConfig: (config) => {
    const key = 'DD2cgT1gqo31G0rd0UCar5h2CGM3Z9Oa51ZG2uKe';
    if (key) {
      config.headers['X-API-KEY'] = key;
    }
    return config;
  },
  onError: (error) => {
    return Promise.reject(error);
  },
};
