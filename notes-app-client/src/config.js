export default {
  s3: {
    BUCKET: 'YOUR_S3_UPLOADS_BUCKET_NAME'
  },
  apiGateway: {
    URL: 'https://wej1id5y1m.execute-api.us-west-2.amazonaws.com/prod',
  },
  cognito: {
    USER_POOL_ID : 'us-west-2_S4tkoaIkg',
    APP_CLIENT_ID : '3p9c5eepanogm9tgkrs4kcm67',
    MAX_ATTACHMENT_SIZE: 5000000,
    REGION: 'us-west-2',
    IDENTITY_POOL_ID: 'us-west-2_S4tkoaIkg',
  }
};
