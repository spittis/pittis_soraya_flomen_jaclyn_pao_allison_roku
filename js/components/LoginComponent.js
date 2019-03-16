// this is the login bubble component

export default {
    template: `
        <div>
        

	<img id="bkgrd-mobile" src="images/mountains-stars-mobile.jpg">
	<img id="bkgrd-tablet" src="images/mountains-stars-mobile.jpg">
	<img id="bkgrd-desktop" src="images/mountains-stars.jpg">
	<img id="home-logo" src="images/av-logo.svg">

    <div id="sign-in">
            <form id="signup-mob" action="">
                    <h3>Sign In</h3>
                    <label for="inlineFormInputName">Username</label><br>
                    <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName username" placeholder="USERNAME" required><br>
            
                    <label for="inlineFormPassword">Password</label><br>
                    <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword pass" placeholder="PASSWORD" required><br>
                </form>

                        <div id="login-buttons" class="col-auto my-1">
                            <input v-on:click.prevent="login()" type="submit">
                            <a href="signup.html">Sign Up</a>
                        </div>
    </div>



<div id="roku-logo">
		<a target="_blank" href="https://www.roku.com/en-ca/"><img id="roku-logo" src="images/roku-logo.png"></a>
		
</div>
        </div>
     `,
 
     data() {
         return {
             input: {
                 username: "",
                 password: ""
             },

         }
     },
 
     methods: {
         login() {
            //console.log(this.$parent.mockAccount.username);
 
            if(this.input.username != "" && this.input.password != "") {
            // fetch the user from the DB
            // generate the form data
            let formData = new FormData();

             formData.append("username", this.input.username);
             formData.append("password", this.input.password);

             let url = `./admin/scripts/admin_login.php`;
 
             fetch(url, {
                    method: 'POST',
                    body: formData
                })
                 .then(res => res.json())
                 .then(data => {
                    if (typeof data != "object") { // means that we're not getting a user object back
                        console.warn(data);
                        console.error("authentication failed, please try again");
                        this.$emit("autherror", data);
                    } else {
                        this.$emit("authenticated", true, data[0]);
                        this.$router.replace({ name: "users" });
                        this.$emit("administator", true, data[0]);
                    }
                })
             .catch(function(error) { 
                 console.log(error);
             });
        } else {
                 console.log("A username and password must be present");
            }
        }
    }
 }

 // this is getting you to the users component after you login