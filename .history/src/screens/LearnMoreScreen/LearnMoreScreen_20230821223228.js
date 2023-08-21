import { View, Text,ScrollView } from 'react-native';
import React from 'react';

const LearnMoreScreen = () => {
  return (
    <ScrollView className="m-5 ">
      <Text className="text-black text-xl mb-2 text">About HireMate</Text>
      <Text className="text-black text-xl mb-2 ">
        Hiremate is an innovative freelancing application designed to simplify
        the payment process for both freelancers and clients. With Hiremate,
        freelancers can easily create profiles, showcase their skills and
        portfolio, and bid on projects. Clients can post job opportunities,
        browse freelancer profiles, and select the best candidate for their
        project.
      </Text>
      <Text className="text-black text-xl mb-2 ">
        One of the key features of Hiremate is the eWallet system, which allows
        users to securely and efficiently manage their finances. Freelancers can
        easily receive payments for their work and withdraw their earnings to
        their bank accounts or other payment methods. Clients can deposit funds
        into their accounts and release payments to freelancers once the work is
        completed to their satisfaction
      </Text>
      <Text className="text-black text-xl mb-2 ">
        Hiremate also offers a user-friendly interface, seamless communication
        tools, and a rating system that allows both freelancers and clients to
        rate their experience with one another. This ensures that both parties
        have a positive experience and can build long-term relationships.
      </Text>
    </ScrollView>
  );
};

export default LearnMoreScreen;
