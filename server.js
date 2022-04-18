const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/donations", require("./routes/donation.route"));

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
