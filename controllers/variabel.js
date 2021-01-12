const arrayOfObject = [
  {
    nama: "Smith",
    hobi: "Self Service",
  },
  {
    nama: "Dio",
    hobi: "Design Grafis",
  },
  {
    nama: "Agung",
    hobi: "Bermain Game",
  },
];

exports.getVariabel = async (req, res) => {
  try {
    const response = {
      namae: arrayOfObject[arrayOfObject.length - 1].nama,
      hobi: arrayOfObject[0].hobi,
    };
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
