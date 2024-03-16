import PrompCard from "./PrompCard";

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
  edit = true,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left"></p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PrompCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            edit={edit}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
