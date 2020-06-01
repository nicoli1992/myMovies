const { Movie } = require("../models");

const movieController = {

    index: async (_req, res) => {
        const movies = await Movie.findAll();
        return res.render("index", { movies });
    },

    store: async (req, res) => {
        const { title, description, watched } = req.body;
        const [poster] = req.files;
        const newMovie = await Movie.create({
            title,
            description,
            poster: poster.filename,
            watched: watched ? true : false,
        });
        if (!newMovie) {
            return res.render("index", { msg: "Falha ao cadastrar o filme"});
        }
        return res.redirect("/");
    },

    edit: async (req, res) => {
        const { id } = req.params;
        const editMovie = await Movie.update({ watched: true }, { where: {id} });
        if (!editMovie) {
            return res.render("index", { msg: "Falha ao editar o filme" });
        }
        return res.redirect("/");
    }, 

}

module.exports = movieController;