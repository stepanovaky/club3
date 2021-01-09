const transformedData = async () => {
  const urlList = [];
  for await (let dog of data.dogs) {
    console.log(dog);
    if (dog.file === undefined || dog.file.length === 0) {
      console.log("thing");
      urlList.push({ ...dog, akcPapersUrl: "" });
    } else {
      console.log("boo");

      //   .then((res) => {
      //     ;
      //   });
      const uploadTask = await storageRef
        .child(`dog/${dog.akcNumber}/${dog.file[0].name}`)
        .put(dog.file[0]);

      const akcPapersUrl = await uploadTask.ref.getDownloadURL();
      urlList.push({ ...dog, akcPapersUrl });
    }
  }
  console.log(urlList);
  return urlList;
};

transformedData()
  .then((res) => {
    data = { ...data, transformed: res };
    return data;
  })
  .then((res) => {
    console.log(res);
    setTimeout(function () {
      sendRegistration(res);
    }, 500);
  });
//  };

const sendRegistration = async (data) => {
  console.log("boo");
  const postData = await fetch(`${apiUrl}/api/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
