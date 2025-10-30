export async function POST(req: Request) {
  try {
    const data = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzzDuPTKiLKhlA3UiERigWLB8MlMR-PrAj7jzX0gsa9Mlhsa9HDWPpwlxQws6pz6PX1/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      },
    );

    const result = await response.json();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Error al enviar datos" }), {
      status: 500,
    });
  }
}
