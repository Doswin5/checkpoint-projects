async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
    console.log(value);
  }
}

// Test the function
iterateWithAsyncAwait(["A", "B", "C", "D"]);


async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ message: "Data fetched successfully!" }), 2000);
  });
}

async function awaitCall() {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log("Response:", data);
}

// Test the function
awaitCall();


async function fetchDataWithError(simulateError = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject("API call failed!");
      } else {
        resolve({ message: "Data fetched successfully!" });
      }
    }, 2000);
  });
}

async function awaitCallWithErrorHandling() {
  try {
    console.log("Fetching data...");
    const data = await fetchDataWithError(true); // Simulate an error
    console.log("Response:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Test the function
awaitCallWithErrorHandling();


async function fetchApi1() {
  return new Promise((resolve) => setTimeout(() => resolve("API 1 response"), 2000));
}

async function fetchApi2() {
  return new Promise((resolve) => setTimeout(() => resolve("API 2 response"), 3000));
}

async function concurrentRequests() {
  console.log("Making concurrent requests...");
  const [response1, response2] = await Promise.all([fetchApi1(), fetchApi2()]);
  console.log("Responses:", { response1, response2 });
}

// Test the function
concurrentRequests();


async function fetchUrl(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Fetched data from ${url}`), 1000);
  });
}

async function parallelCalls(urls) {
  console.log("Fetching data from URLs...");
  const responses = await Promise.all(urls.map((url) => fetchUrl(url)));
  console.log("Responses:", responses);
}

// Test the function
parallelCalls(["https://api.example.com/data1", "https://api.example.com/data2"]);
