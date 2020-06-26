  // async getList(idProject) {
  //   try {
  //     await knex
  //       .select()
  //       .from("list")
  //       .where("id_project", idProject)
  //       .then((rows) => {
  //           if (rows.length > 0) {
  //               return JSON.stringify(rows);
  //           } else {
  //               return "Empty project"
  //           }
  //       });
  //   } catch (error) {
  //     return error;
  //   }
  // }