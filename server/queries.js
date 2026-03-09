const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_NAME,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const getVideos = async (request, response) => {
  try {
    await pool.query("SELECT * FROM videos", (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  } catch (error) {
    console.error(error);
  }
};

const getVideosById = async (request, response) => {
  const id = request.params.id;
  try {
    await pool.query(
      "SELECT * FROM videos WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  } catch (error) {
    console.error(error);
  }
};
const getDefaultVideo = async (request, response) => {
  const uuid = "d0438c4b-21f0-4944-8e1a-46c32876c913";
  try {
    await pool.query(
      "SELECT * FROM videos WHERE id = $1",
      [uuid],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const createVideo = async (request, response) => {
  const { title } = request.body;
  try {
    await pool.query(
      "INSERT INTO videos (title) VALUES ($1)",
      [title],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`Video added with Title: ${title}`);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const updateVideo = async (request, response) => {
  const id = request.params.id;
  const { title } = request.body;
  try {
    await pool.query(
      "UPDATE videos SET title = $1 WHERE id = $2",
      [title, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`Video modified with ID: ${id}`);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteVideo = async (request, response) => {
  const id = request.params.id;
  try {
    await pool.query(
      "DELETE FROM videos WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`Video deleted with ID: ${results.rows}`);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getVideos,
  getVideosById,
  getDefaultVideo,
  createVideo,
  updateVideo,
  deleteVideo,
};
