
// this page gets the cards from usercomponent and fills in the name and messages
export default {
	template: `
	<form id="signup-mob" action="">
	<h3>User Info</h3>

	<label for="fname">First Name</label><br>
	<input type="text" name="fname" id="fname" placeholder="FIRST NAME"><br>

	<label for="lname">Last Name</label><br>
	<input type="text" name="lname" id="lname" placeholder="LAST NAME"><br>

	<label for="email">Email</label><br>
	<input type="email" name="email" id="email" placeholder="EMAIL"><br>

	<label for="username">Username</label><br>
	<input type="text" name="username" id="username" placeholder="USERNAME"><br>

	<label for="pass">Password</label><br>
	<input type="text" name="pass" id="pass" placeholder="PASSWORD"><br>

	<label for="phone">Phone Number</label><br>
	<input type="tel" name="phone" id="phone" placeholder="PHONE NUMBER"><br>

	<label for="birthday">Birthday</label><br>
	<input type="date" name="birthday" id="birthday" placeholder="BIRTHDAY"><br>

	<h3>Payment</h3>

	<label for="cardname">Name on Card</label><br>
	<input type="text" name="cardname" id="cardname" placeholder="HANNAH MONTANA"><br>

	<label for="ccnum">Credit Card Number</label><br>
	<input type="text" name="ccnum" id="ccnum" placeholder="1111-2222-3333-4444"><br>

	<label for="exp">Expiration Date</label><br>
	<input type="text" name="exp" id="exp" placeholder="02/23"><br>

	<label for="cvv">CVV</label><br>
	<input type="text" name="cvv" id="cvv" placeholder="123"><br>
	<br><br>
	<input type="submit">

	<!-- <label for="country">Country</label>
			<select id="country" name="country" placeholder="Select Country">
					<option value="Australia">Australia</option>
					<option value="Bermuda">Bermuda</option>
					<option value="Canada">Canada</option>
					<option value="United States">USA</option>
			</select> -->

	<!-- <label for="birthday">I would like to receive email updates on new releases and recommendations.</label><br>
	<input type="checkbox" name="updates" id="updates"> -->

</form>



<!--Payment Section-->


<form id="signup" action="">
<!-- <label for="fname">First Name</label><br> -->
<input type="text" name="fname" id="fname" placeholder="FIRST NAME"><br>

<label for="lname">Last Name</label><br>
<input type="text" name="lname" id="lname"><br>

<label for="email">Email</label><br>
<input type="email" name="email" id="email"><br>

<label for="username">Username</label><br>
<input type="text" name="username" id="username"><br>

<label for="pass">Password</label><br>
<input type="text" name="pass" id="pass"><br>

<label for="phone">Phone Number</label><br>
<input type="tel" name="phone" id="phone"><br>

<label for="birthday">Birthday</label><br>
<input type="date" name="birthday" id="birthday"><br>

<label for="birthday">I would like to receive email updates on new releases and recommendations.</label><br>
<input type="checkbox" name="updates" id="updates">
</form>
	`,

}
