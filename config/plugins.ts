export default () => ({});
module.exports = ({ env }) => ({
    // ...
    "users-permissions": {
      config: {
        register: {
          allowedFields: ["username", "email", "password", "First_name", "Last_name", "mobile"],
          
        },
      },
    },
    // ...
  });
