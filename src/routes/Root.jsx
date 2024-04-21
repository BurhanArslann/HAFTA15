import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Rehber</h1>

        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>

          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>

        <nav>
          <ul>
            <li>
              <Link to={"/"}>Ana ekran</Link>
            </li>
            
            {contacts.length ? (
              <>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>İsim yok</i>
                      )}{" "}
                      {contact.favorite && <span>★</span>}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <p>
                <i>Kişi bulunamadı..</i>
              </p>
            )}
          </ul>
        </nav>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
