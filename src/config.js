const dev = {
  STRIPE_KEY: "pk_test_1BsF5o5Jifk1CaJJMmpKBwNi",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1btda9d6h8mfd"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ewgyx18qk1.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_FKhbB3IjK",
    APP_CLIENT_ID: "782i6e3vkfsk4fhn25piin2kt",
    IDENTITY_POOL_ID: "us-east-1:9c228e25-580d-4c66-ada3-4f80cd7303ed"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_1BsF5o5Jifk1CaJJMmpKBwNi",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-8xcbrmnbychh"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://eq93zwm3kd.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
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
