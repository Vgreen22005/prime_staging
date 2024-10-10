import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: "HomePage",
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerTintColor: "#fff",
            }} />
            <Stack.Screen name="users/[id]" options={{
                headerTitle: "User Page",
            }} />
            <Stack.Screen name="items/[itemID]" options={{
                headerTitle: "Item Page",
            }} />
        </Stack>
    )
}
