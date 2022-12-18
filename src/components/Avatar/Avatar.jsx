import Avatar from 'avataaars';

function MyAvatar() {
    return (
      <div className='mx-auto avatar'>
        <Avatar
            avatarStyle='Circle'
            topType='LongHairStraight2'
            accessoriesType='Round'
            hairColor='BrownDark'
            facialHairType='Blank'
            clotheType='BlazerSweater'
            eyeType='Default'
            eyebrowType='RaisedExcitedNatural'
            mouthType='Default'
            skinColor='Light'
        />
      </div>
    )
  }

export default MyAvatar