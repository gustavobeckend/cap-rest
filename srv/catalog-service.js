import cds from '@sap/cds';

export default cds.service.impl(function () {
    const { Books } = this.entities;

    this.on('reabastecer', async (req) => {

        const { ID, quantidade } = req.data;

        if (!quantidade || quantidade <= 0) {
            return req.error(400, 'Quantidade inválida!');
        }

        const book = await SELECT.one.from(Books).where({ID});
        if (!book) return req.error(404, 'Livro não encontrado');

        await UPDATE(Books).set({ stock: book.stock + quantidade }).where({ID});
        return { message: `Livro reabastecido com ${quantidade} unidades` }
    })
})