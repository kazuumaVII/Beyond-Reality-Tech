import { ChangeEvent, FormEvent, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCheckIcon, setIsCheckIcon] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  console.log(isCheckIcon, 'lalalal');

  useEffect(() => {
    if (submit && isValidEmail) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setIsCheckIcon(true);

        setTimeout(() => {
          setIsCheckIcon(false);

          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 2000);
      }, 4000);

      // setIsCheckIcon(false);
    }
  }, [submit]);

  useEffect(() => {
    setIsValidEmail(true);
  }, [formData.email]);

  useEffect(() => {
    const values = Object.values(formData);

    setSubmit(false);
    setIsEmpty(values.some((value) => value === ''));
  }, [formData]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmpty) {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      setIsValidEmail(regex.test(formData.email));
      setSubmit(true);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__title">
          <h5>JOINT Beyond</h5>
          <div className="contact__title__img">
            <Image src="/assets/lineContact.svg" alt="Line" fill />
          </div>

          <span>Let’s Build Your VR Experience</span>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className={`${!isValidEmail ? 'error' : ''} `}
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            className="subject"
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message ..."
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className={`${
              loading && isValidEmail && !isCheckIcon ? 'validate' : ''
            } 
						${isEmpty ? 'disable' : ''}
						${submit && !isValidEmail ? 'mailError' : ''}
						${isValidEmail && isCheckIcon ? 'checkIcon' : ''}
					`}
            type="submit"
          >
            <Image
              src="/assets/reload.svg"
              className="reload"
              alt="Reload"
              width={20}
              height={20}
            />

            <Image
              src="/assets/check.svg"
              className="check"
              alt="Reload"
              width={30}
              height={30}
            />

            {isValidEmail ? <p>Send to email</p> : <p>invalid email</p>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
