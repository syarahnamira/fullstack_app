import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());

app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get("https://randomuser.me/api", {
      params: { results: 10, page: 1 },
    });

    const users = response.data.results.map((user: any) => ({
      name: `${user.name.title}, ${user.name.first} ${user.name.last}`,
      location: `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
      email: user.email,
      age: user.dob.age,
      phone: user.phone,
      cell: user.cell,
      picture: [
        user.picture.large,
        user.picture.medium,
        user.picture.thumbnail,
      ],
    }));

    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
