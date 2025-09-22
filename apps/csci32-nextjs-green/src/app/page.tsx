import Link from 'next/link'

export default function Home() {
  return (
    <Link
      href="/button"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        The Weirdest animal in the world is the Barreleye Fish
      </h5>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        This fish here has these vibrant neon green eyes that you can see in its head. It's like an X-ray fish but
        weirder.
      </p>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOjds8e9Na9jeLI1BGdH-9KQ-u2Zjgi3pX5HSX8sxMHWuGbOaMQUxvbbgjkNLePXAUQ6PCArxB1gu-59JtQ48qLLdMIyrBGGD7P4_wMbKqQ"
        alt="Barreleye Fish"
        className="mt-4 rounded-lg shadow-md"
      />
    </Link>
  )
}
