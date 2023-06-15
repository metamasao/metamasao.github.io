export default function Footer({ author }) {
  return (
    <footer className="text-center bg-dark text-dark-emphasis py-1 mt-3">
      <p className="my-1">&copy;{author}</p>
    </footer>
  );
}