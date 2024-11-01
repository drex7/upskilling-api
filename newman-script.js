const newman = require("newman"); // require Newman in your project



// call newman.run to pass the `options` object and wait for callback
newman
  .run({
    collection: require("./api_postman_collection.json"),
    environment: require("./env.json"),
    reporters: ["htmlextra"],
    workingDir: "./collection-files",
    environment: "env.json",
    folder: "",
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
