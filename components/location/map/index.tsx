function Map(): JSX.Element {
  return (
    <iframe
      title="church-location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.1980011571335!2d-8.628912343097433!3d40.64822654589058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23986fa463a94f%3A0x2fcda1c4b15f43da!2sIgreja%20Baptista%20de%20Esgueira!5e0!3m2!1sen!2spt!4v1607887109611!5m2!1sen!2spt"
      width="100%"
      height="600"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
      aria-hidden="false"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    />
  )
}

export { Map }
