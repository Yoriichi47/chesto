import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "This field is required"]
    },
    email: {
        type: String,
        required: [true, "This field is required"],
        unique: true,
        trim: true, // removes whitespace from both ends of a string
    },
    password: {
        type: String,
        required: [true, "This field is required"],
        minlength: [8, "Password must be at least 8 characters long"]
    },
    cartItems: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            product: {
                type: Schema.Types.ObjectId,  // reference to Product model in MongoDB database
                ref: "Product"
            }  
        }
    ],
    userRole: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    }
},
{
    timestamps: true // automatically adds createdAt and updatedAt fields to the schema
})

userSchema.pre("save", async function(next) {  // middleware to hash the password before saving it to the database
    if(!this.isModified("password")) {   // if the password is not modified, move to the next middleware
        next()  
    }
    try {
        const salt = await bcrypt.genSalt(10)  // generate a salt with 10 rounds of salting process
        this.password = await bcrypt.hash(this.password, salt)  // hash the password
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
})

userSchema.methods.matchPassword = async function(password) {  // method to compare the entered password with the hashed password in the database
    return await bcrypt.compare(password, this.password)  // compare the entered password with the hashed password
}

const User = mongoose.models.User || mongoose.model("User", userSchema)  // create a model from the schema

export default User


// this.password is the password entered by the user
// password is the hashed password stored in the database