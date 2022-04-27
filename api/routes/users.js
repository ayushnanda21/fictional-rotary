const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//update user route

router.put("/:id",async (req,res)=>{

    if(req.body.userId ===req.params.id || req.body.isAdmin){

        //if tries to modify password
        if(req.body.password){
            try{    
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch(err){
                    return res.status(500).json(err);
            }
        }

        //updating actual user
        try{
            const user  =await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        }catch(err){
            res.status(500).json(err);
        }

    } else{
        return res.status(403).json("You can update only you account");
    }

});

//delete user route
router.delete("/:id",async (req,res)=>{

    if(req.body.userId ===req.params.id || req.body.isAdmin){

        //deleting actual user
        try{
            const user  =await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        }catch(err){
            res.status(500).json(err);
        }

    } else{
        return res.status(403).json("You can delete only you account");
    }

});



//get user route
//lh:8800/users/?userId=469746746
//lh:8800/users/?username=john
//converting params to query parametring

router.get("/", async (req, res) => {
    const userId  = req.query.userId;
    const username = req.query.username;
    try {
      const user = userId 
      ? await User.findById(userId) 
      : await User.findOne({username: username});
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get friends
router.get("/friends/:userId", async (req,res)=>{
    try{
        const user  =await User.findById(req.params.userId);
        const friends = await Promise.all(
            user.followings.map(friendsId=>{
                return User.findById(friendsId)
            })
        )
        let friendList= [];
        friends.map(friend=>{
            const {_id, username,profilePicture} = friend;
            friendList.push({_id, username,profilePicture});
        });
        res.status(200).json(friendList);
    } catch(err){
        res.status(500).json(err);
    }
})

//follow a user route

router.put("/:id/follow", async(req,res)=>{

    if(req.body.userId !== req.params.id){
        try{
                const user = await User.findById(req.params.id);
                const currentUser = await User.findById(req.body.userId);
                
                if(!user.followers.includes(req.body.userId)){
                   
                    await user.updateOne({ $push: {followers:req.body.userId } });
                    await currentUser.updateOne({ $push: {followings:req.params.id } });
                    res.status(200).json("You have successfully followed the user.");

                } else{
                    res.status(403).json("You already follow this user");
                }

        } catch{
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("Can't follow self");
    }

});

//unfollow a  user route
router.put("/:id/unfollow",async(req,res)=>{

    
    if(req.body.userId !== req.params.id){
        try{
                const user = await User.findById(req.params.id);
                const currentUser = await User.findById(req.body.userId);
                
                if(user.followers.includes(req.body.userId)){
                   
                    await user.updateOne({ $pull: {followers:req.body.userId } });
                    await currentUser.updateOne({ $pull: {followings:req.params.id } });
                    res.status(200).json("You have  unfollowed the user.");

                } else{
                    res.status(403).json("Unfollow can't be done");
                }

        } catch{
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("Can't unfollow self");
    }




});


//exporting to server file
module.exports = router