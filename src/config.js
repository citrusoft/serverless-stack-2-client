const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-unfh6ryhf98n"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://smgiw2aqg1.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_CsDoGUX2C",
    APP_CLIENT_ID: "13s0uq2miosplm5k6f5qohsfo8",
    IDENTITY_POOL_ID: "us-east-1:4c7640bd-afff-4820-a34e-dc0880915ec3"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-8xcbrmnbychh"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://eq93zwm3kd.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_DkuiIdfwW",
    APP_CLIENT_ID: "34kkpqv9htg0013i8gl934leo0",
    IDENTITY_POOL_ID: "us-east-1:0314f685-0c4b-4119-b0c0-b783542a0da8"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
