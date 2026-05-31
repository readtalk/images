export default {
	async fetch(request, env) {
		const inputs = {
			prompt: "realistic images, asian girls, casual styles, girly in the city",
		};

		const response = await env.AI.run(
			"@cf/lykon/dreamshaper-8-lcm",
			inputs,
		);

		return new Response(response, {
			headers: {
				"content-type": "image/png",
			},
		});
	},
} satisfies ExportedHandler<Env>;
