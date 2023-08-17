require("express-async-errors");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");

const AppError = require("./utils/AppError");

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

app.use((err, request, response, next) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    console.error(err);
  
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));