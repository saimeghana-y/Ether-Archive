const Moralis = require("moralis").default;
const fs = require("fs"); 

async function uploadToIpfs() {

    await Moralis.start({
        apiKey: "xbXs0TTwZaGXWz8Vuj71H7ZhBM5DgSHJnrpMoyd8YqwilgNker25UNYwH4ZxR9UV",
    });

    const uploadArray = [
        
        {
            path: "transaction1.json",
            content: {
                Transaction_Id: "0xc78887cb12abbd0fe80062011964a0715dc29629",
                Date_Of_Payement: "04-12-22", 
                Seed_type: "Sunflower",
                Quantity_of_seeds:"1000 gm",
               Status_of_payement:"Sucessful",
            },
        },
        {
            path: "transaction2.json",
            content: {
                Transaction_Id: "0xc65887cb12abbd0fe80062011964a0715dc29628",
                Date_Of_Payement: "04-12-22", 
                Fertilizer_Type: "Nitrogen Fertilizer",
                Quantity_of_fertilizer:"2000 gm",
               Status_of_payement:"Sucessful",
            },
        },
        {
            path: "transaction3.json",
            content: {
                Transaction_Id: "0x887cb1652abbd0fe80062011964a0715dc29928",
                Date_Of_Payement: "04-12-22", 
                Spices_Type: "Ginger",
                Quantity_of_fertilizer:"800 gm",
               Status_of_payement:"Sucessful",
            },
        },

    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: uploadArray,
    });

    console.log(response.result)
}

uploadToIpfs();