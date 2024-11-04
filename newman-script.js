const newman = require("newman"); // require Newman in your project

const testsToRun = process.argv[2];
let testOptions = {};

switch (testsToRun) {
  case "login_tests":
    testOptions = {
      iterationData: "./collection-files/login_data.csv",
      folder: "Login Tests",
    };
    break;
  case "rate_limiting":
    testOptions = {
      iterationCount: 65,
      folder: "Rate Limiting",
    };
    break;
  case "conditional_workflow":
    testOptions = {
      folder: "Conditional Workflow",
    };
    break;
    case "user_creation":
      testOptions = {
        iterationData: "./collection-files/user_data.csv",
      folder: "Data-Driven User Creation Workflow",
    };
    break;
  default:
    break;
}

// call newman.run to pass the `options` object and wait for callback
newman
  .run({
    collection: require("./postman_collection.json"),
    environment: require("./collection-files/env.json"),
    reporters: ["htmlextra"],
    ...testOptions,
    workingDir: "collection-files",
    environment: "./collection-files/env.json",
    reporter: {
      htmlextra: {
        export: "./report.html",
      },
    },
  })
  .on("assertion", (err, args) => {
    if (err)
      console.log(
        `Assertion Failed! ${args.assertion}. Expected: ${args.expected}, but got: ${args.actual}.`
      );
  })
  .on("request", (err, args) => {
    const responseTime = args.response.responseTime;
    if (responseTime > 300) {
      console.log(
        `Performance Issue: ${args.item.name} took ${responseTime} ms.`
      );
    } else {
      console.log(`${args.item.name}: ${responseTime} ms`);
    }
  });
