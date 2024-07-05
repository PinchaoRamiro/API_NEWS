import NEWS_API from '../api/NEWS_API.js';

export const getArticles = async (req, res) => {
    const query = req.query.query;
    const category = req.query.category;
    const language = req.query.language || "en";
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    const fromDate = req.query.fromDate;
    const toDate = req.query.toDate;

    try {
        const response = await NEWS_API.get("/article/getArticles", {
          params: {
            keyword: query,
            categoryUri: category,
            language: language,
            articlesPage: page,
            articlesCount: pageSize,
            dateStart: fromDate,
            dateEnd: toDate,
          },
        });
        return res.send(response.data);
    } catch (error) {
        return res.status(404).send();
    }
};

export const getArticlesById = async (req, res) => {
  const id = req.params.id;
  
  try {
    const response = await NEWS_API.get(`/article/getArticle`, {
      params: {
        articleUri: id,
      },
    });
    console.log(response.data);
    if(response.data == error){
      return res.status(404).send("Artículo no encontrado.");
    }
    return res.send(response.data);
  } catch (error) {
    console.error(error); // Esto te ayudará a depurar el problema imprimiendo el error en la consola
    // Aquí puedes verificar el tipo de error y enviar una respuesta adecuada
    if (error.response && error.response.status === 404) {
      return res.status(404).send("Artículo no encontrado.");
    } else {
      return res.status(500).send("Error al obtener el artículo.");
    }
  }
};