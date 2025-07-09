export async function GET() {
    console.log("Health Ok!")
    return new Response('Health Ok!', {status: 200});
}