    {data.map(item => {
        return (
          <View key={item._id} className="border mt-10 bg-slate-200 rounded-sm">
            <Text className="pl-2 font-bold mt-5 text-xl">{item.title}</Text>
            <Text className=" mt-3 pl-4 text-lg">{item.body}</Text>
            <Text className=" mt-3 pl-4 text-md">
              posted by:{' '}
              <Text className="text-[#3D7DEB]">{item.postedBy.username}</Text>
            </Text>
            {appliedStates[item._id] ? (
              <CustomButton
                text="unApply"
                onPress={() => unapply(item._id)}
                bgColor="#3D7DEB"
                textColor={'#fff'}
              />