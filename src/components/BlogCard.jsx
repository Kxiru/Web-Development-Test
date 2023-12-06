function BlogCard(props) {
  const date = new Date(props.date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div class="col-4 u-equal-height">
      <div class="p-card u-no-padding article-card">
        <div class="colour-box"></div>
        <div class="p-card__inner">
          <p>{props.topic}</p>
        </div>

        <hr class="u-no-margin--bottom"></hr>

        <img class="p-card__image" src={props.img} />

        <div
          class="p-card__inner"
          style={{
            height: "120px",
            overflow: "clip",
          }}
        >
          <a href={props.post_link}>
            <h3>{props.title}</h3>
          </a>
        </div>

        <div class="p-card__inner post-meta">
          By <a href={props.author_link}>{props.author}</a> on
          {` ${date.getDay()} ${
            monthNames[date.getMonth()]
          } ${date.getFullYear()}`}
        </div>

        <hr class="u-no-margin--bottom"></hr>

        <div class="p-card__inner">
          <p>Article</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
