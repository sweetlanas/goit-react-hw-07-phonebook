import { useSelector } from "react-redux";
import PhoneBookListItem from "../PhoneBookListItem/PhoneBookListItem";

import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from "../../redux/rtk/contacts-api";
import { getFilter } from "../../redux/selectors";
import filterContacts from "../../helpers/filterContacts";

const PhoneBookList = () => {
  const { data } = useGetContactsQuery();

  const [deleteContact] = useDeleteContactsMutation();

  const filter = useSelector(getFilter);

  return (
    <ul>
      {data &&
        filterContacts(data, filter).map(({ name, number, id }) => {
          return (
            <PhoneBookListItem
              onDeleteContact={() => deleteContact(id)}
              key={id}
              name={name}
              number={number}
              id={id}
            />
          );
        })}
    </ul>
  );
};

export default PhoneBookList;
