import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="title-container">
        <h1>speaker's corner</h1>
      </div>
      <Link className="link" href={"/"}>
        register
      </Link>
      <Link className="link" href={"/"}>
        login
      </Link>
    </nav>
  );
}
