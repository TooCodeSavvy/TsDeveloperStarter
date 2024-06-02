import * as esbuild from "esbuild"; 

const context = await esbuild.context({
    entryPoints: ["./src/index.ts"],
    outdir: "./dist",
    target: "esnext",
    minify: true,
    bundle: true,
});

//await context.rebuild();
//context.dispose();
await context.watch();
await context.serve({
    servedir: "./dist",
    port: 3000,
}).then(() => {
    console.log("Serving on http://localhost:3000");
});