async function getTask(id) {

    return await id
    // try {
    //   await knex
    //     .select()
    //     .from("task")
    //     .where("id_task", id)
    //     .then((rows) => {
    //         if (rows.length > 0) {
    //             return JSON.stringify(rows);
    //         } else {
    //             return "Empty Task"
    //         }
    //     });
    // } catch (error) {
    //   return error;
    // }
  }

  export default {
    getTask
  }