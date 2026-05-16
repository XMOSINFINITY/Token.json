 const { exec } = require("child_process");

bot.command("update", async (ctx) => {
  try {
    await ctx.reply("🔄 Sedang mengambil update dari GitHub...");

    exec("git pull", async (error, stdout, stderr) => {

      if (error) {
        console.log(error);

        return ctx.reply(
          `❌ Update gagal\n\n${error.message}`
        );
      }

      if (stderr) {
        console.log(stderr);
      }

      await ctx.reply(
        `✅ Update berhasil\n\n${stdout}`
      );

      
      process.exit(1);
    });

  } catch (err) {
    console.log(err);

    ctx.reply("❌ Terjadi error saat update");
  }
});
