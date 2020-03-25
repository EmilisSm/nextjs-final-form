import Head from 'next/head';
import { Form, Field } from 'react-final-form';

const onSubmit = values => {
	window.alert(JSON.stringify(values, 0, 2));
};

const Home = () => (
	<div className='container'>
		<Head>
			<title>Create Next App</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>

		<main>
			<Form
				className='final-form'
        onSubmit={onSubmit}
        initialValues={{ firstCheck: true, color: '#000000' }}
				// validate={validate}
				render={({ handleSubmit, values }) => (
					<form onSubmit={handleSubmit}>
						<h2>Final form example</h2>
						<div className='section'>
							<div>
								<label>First Name</label>
								<Field
									name='firstName'
									component='input'
									placeholder='First Name'
								/>
							</div>
							<div>
								<label>Last Name</label>
								<Field
									name='lastName'
									component='input'
									placeholder='First Name'
								/>
							</div>
						</div>
						<div className='section'>
							<Field name='firstCheck' component='input' type='checkbox' checked={values.firstCheck} />
							<label>First</label>
							<Field name='secondCheck' component='input' type='checkbox' />
							<label>Second</label>
							<Field name='thirdCheck' component='input' type='checkbox' />
							<label>Third</label>
						</div>
						<div className='section'>
							<div>
								<label>Choose color: </label>
								<Field
									name='color'
									component='input'
									type='color'
									value='#000000'
								/>
							</div>
						</div>
						<div className='section'>
							<div>
								<label for='datemax'>Enter a date before 2020-03-24:</label>
								<Field
									name='maxDate'
									component='input'
									type='date'
									min='2020-03-24'
								/>
							</div>
						</div>
						<button className='submit' type='submit'>
							Submit
						</button>
						<pre>{JSON.stringify(values, 0, 2)}</pre>
					</form>
				)}
			/>
		</main>

		<footer></footer>

		<style jsx>{``}</style>

		<style jsx global>{`
			html,
			body {
				padding: 0;
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
					Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

			* {
				box-sizing: border-box;
			}

			main {
        position: relative;
				// margin: 5% 25%;
      }

      @media screen and (min-width: 750px) {
        form {
          position: absolute;
          left: 40%;
          top: 50%;
        }
      }

      @media screen and (max-width: 750px) {
        form {
          position: absolute;
          left: 20%;
          top: 50%;
        }
      }


			.section {
        width: 100%;
				margin-bottom: 0.5rem;
			}

			.section > div > label {
				margin-bottom: 0.5rem;
				display: block;
			}

			.section > div > input {
				margin-bottom: 0.5rem;
				display: block;
			}

			.submit {
				margin-top: 0.5rem;
			}
		`}</style>
	</div>
);

export default Home;
