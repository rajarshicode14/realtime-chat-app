import { Avatar, Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import ChatMenu from './ChatMenu'

import { FaceSmileIcon, Bars3Icon } from '@heroicons/react/24/outline'


const ChatSection = () => {
    return (
        <>
            <Flex
                flexDirection={'column'}
            // position={'relative'}
            >

                <Flex
                    h={'4rem'}
                    backgroundColor={'#EDF2F7'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    px={'20px'}

                >
                    <Flex
                        alignItems={'center'}
                        gap={2}
                        cursor={'pointer'}
                    >
                        <Bars3Icon width={'20px'} height={'20px'} className='mr-4 sm:block lg:hidden' />
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Text fontWeight={'semibold'}>Dan Abramov</Text>
                    </Flex>

                    <ChatMenu />
                </Flex>


                <Box
                    h={'72vh'}
                    backgroundColor="#EFEAE2"
                    overflowY="scroll"
                    py={'20px'}
                    px={'40px'}
                // overflowX={'hidden'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cumque maxime modi? At autem quo omnis nisi nostrum iusto quia debitis adipisci ullam, itaque accusantium deleniti rerum voluptatem. Numquam reiciendis animi aliquam consequatur dignissimos similique excepturi atque aut quas quis aperiam, autem voluptas neque porro? Cumque ipsa et voluptate ducimus expedita quos nostrum corrupti deleniti quasi ad facere cum, aperiam neque earum. Cumque veniam quod consectetur consequuntur temporibus alias natus doloribus porro repudiandae deleniti sint, pariatur molestias expedita esse eos at ea. Mollitia repellat illum veritatis non adipisci! At quam, eaque pariatur, explicabo sapiente debitis cum impedit veniam voluptatem quas sint, a libero cumque voluptatibus. Maxime id atque eius impedit quisquam debitis iusto similique commodi, libero deserunt amet laboriosam delectus, repudiandae autem est ipsum? Culpa blanditiis vel voluptatem voluptates voluptate. Enim temporibus excepturi, provident illo perferendis iste. Non, ullam sint. Minima doloribus assumenda voluptate mollitia repudiandae modi nesciunt et, cum deserunt magni ducimus quibusdam ex quia ipsum placeat vitae inventore nihil voluptatibus veniam officiis veritatis soluta recusandae animi. Sapiente pariatur, nobis nisi, libero exercitationem temporibus fuga quam, perspiciatis commodi quisquam asperiores unde fugiat deleniti distinctio est dicta dolorem cum laboriosam. Quos quam accusantium sequi dolorum eaque, nobis laborum expedita commodi consequuntur! Corrupti, error inventore velit, odit delectus blanditiis quo obcaecati molestias totam facilis cum quis animi, dicta laudantium officia accusamus. Repellendus deserunt maxime amet obcaecati rem iure porro corrupti nam cupiditate sequi, recusandae odio neque, libero, vel blanditiis! Ducimus, nesciunt explicabo? Quod sequi asperiores natus, doloribus magni assumenda eveniet officiis, dignissimos officia explicabo adipisci distinctio tenetur quas dolorem ab aliquam nisi, et labore harum obcaecati culpa ducimus. Illum, obcaecati eos. Unde ab quam consequatur, tempore eveniet alias, similique excepturi eaque consequuntur facilis recusandae ex rerum quibusdam optio? Commodi iusto distinctio hic, vel consequatur quae, corporis magni repudiandae ex, reprehenderit unde quas culpa aperiam omnis quisquam voluptatibus labore sunt. Quia, modi doloremque odit architecto, nihil expedita nemo esse dicta necessitatibus dolor recusandae, neque molestias sed ea iste. Nulla aspernatur repellendus iste voluptatum vitae excepturi facere, accusamus modi rem sapiente ipsum mollitia quod sit fugit natus. Nemo corrupti cupiditate impedit illo, commodi quod laudantium praesentium ipsum iusto dolor laboriosam. Quae voluptas rem iure repudiandae incidunt sapiente nisi alias enim odit, id quos hic illum aperiam nesciunt neque doloribus in officiis, cupiditate quam illo? Eos mollitia a vero numquam perferendis quibusdam quod praesentium ut ex tempora placeat, doloremque assumenda esse dolores maiores dolorem sapiente? Asperiores porro nobis dicta totam iusto, deserunt, sint incidunt excepturi libero minus ducimus veritatis explicabo tempore voluptatibus nulla minima quis praesentium doloribus! Cumque esse praesentium eius non cum autem quas provident itaque cupiditate atque, aut, vero nostrum quod eos? Et reiciendis quam beatae voluptate, quod debitis sit. Suscipit error distinctio harum temporibus ratione sit cum obcaecati voluptates ab, enim animi aspernatur reprehenderit voluptatibus ipsum nesciunt aut. Distinctio, vel, odio dolores non eveniet ipsum numquam illum impedit corporis explicabo tempore, ipsa perferendis vero vitae ad sint. Rerum numquam expedita doloribus, non itaque laboriosam deleniti aperiam impedit et perspiciatis libero, reprehenderit distinctio debitis incidunt dolorum tenetur, vel a autem? Inventore dicta officiis accusantium, ex corporis eaque, voluptatibus rerum animi a porro fugit similique adipisci aliquam nihil eos earum nesciunt recusandae, quidem cum? Esse ex, molestiae explicabo quibusdam recusandae consequuntur cum quam, voluptatum eum earum, praesentium ratione! Quaerat, ad. Accusamus non aperiam magnam sapiente harum incidunt officiis nobis ut quidem quis totam similique ad recusandae fugit blanditiis natus illum, commodi vel qui animi. Facilis autem quas voluptatibus at distinctio rem atque quia, quam eius assumenda nihil magni eum reprehenderit sequi a saepe vero enim, molestiae sapiente unde nulla laudantium? Quis laborum beatae voluptates quos iste debitis voluptatibus itaque rem velit aliquid ratione sequi atque ipsum expedita dolor est neque, nulla tenetur alias vitae distinctio incidunt odit earum nobis! Ut tempore dolor, provident porro sequi necessitatibus. Voluptate ut, dolores sint nesciunt, molestiae dicta voluptatum nostrum dolorum hic inventore culpa ducimus amet adipisci voluptates pariatur facere beatae quae cum! Incidunt accusantium aliquid voluptatem odio temporibus laboriosam labore cupiditate vero unde ducimus doloribus veritatis nihil quasi, officia architecto et explicabo quaerat sunt id corrupti enim! Exercitationem ea ab nam iure delectus error repellat dolores, pariatur qui illo molestias asperiores quibusdam animi ipsa voluptatibus eligendi adipisci vel, totam blanditiis ducimus fugiat perspiciatis! Saepe totam aliquam fugiat voluptates explicabo sed fuga modi laboriosam tempora quas non nostrum earum mollitia reprehenderit, in veritatis vel hic praesentium voluptas dolorum aliquid consequuntur! Temporibus cumque voluptatum ducimus commodi distinctio! Quo modi id unde ullam tempora repudiandae perspiciatis qui, accusamus cum harum sed temporibus quas in minima pariatur distinctio sequi quaerat nam. Sint tempora eveniet nobis magnam molestiae, et odit. Cum, neque hic corrupti maxime doloremque esse iusto! Nesciunt dolorem rem obcaecati officiis suscipit pariatur enim dolorum sed, asperiores animi. Officiis totam necessitatibus numquam, molestiae nobis, ipsum perferendis delectus cumque blanditiis harum placeat perspiciatis? Quisquam suscipit ducimus ad aut eius! Et, laboriosam quasi. Esse officiis excepturi nobis est. Sit doloremque modi aperiam tenetur veritatis praesentium beatae repudiandae? Nulla dolor, enim perferendis at quae voluptatum mollitia aliquam delectus porro possimus voluptas, aperiam recusandae ullam quod impedit ab cumque nostrum non quidem quisquam molestiae libero quaerat. In ratione odit ducimus quod voluptatem recusandae molestiae quasi voluptate explicabo fuga quisquam iusto obcaecati facere omnis deserunt pariatur incidunt soluta sit, accusantium eos quis eligendi officia reiciendis et. Ut, sunt aliquam nam accusantium amet incidunt nisi error libero optio quidem quaerat, iusto, quibusdam dolorem porro soluta cumque quis? Laudantium, earum cum numquam illo repudiandae ducimus eum quisquam veniam totam reprehenderit sed dolore ea, consequatur minus aliquid officia alias libero eaque, atque quidem. Placeat aut eos excepturi architecto fugiat illo ut aperiam saepe dicta perferendis quod, fugit porro, ex voluptates facere! Fuga facilis saepe, dicta corporis assumenda, veniam illum iste, rerum vero porro similique rem quam? Velit similique, dolorum soluta tempora aliquid voluptas ullam accusamus ad a modi dolorem facilis nihil fugiat ut delectus odit saepe provident consequatur totam vero quibusdam dolores nam voluptatum! Alias aperiam laboriosam voluptatibus nesciunt reiciendis voluptatum omnis est rem ad magni, eaque aliquam!
                </Box>

            </Flex>


            <Flex
                mx={'4px'}
                // backgroundColor={'#E2E8F0'}
                // borderRadius={'4px'}
                position="absolute"
                bottom="-6px"
                // left="10"
                // right='0px'
                width="99%"
                px={'10px'}
                justifyContent={'flex-start'}
                gap={'10px'}
            >
                {/* <Flex> */}

                <Button

                    backgroundColor='#FFE553'
                    _hover={{ backgroundColor: '#FFDA00' }}
                >
                    <FaceSmileIcon width={'30px'} height={'30px'} />
                </Button>

                <Input variant='filled' placeholder='Type a message' _placeholder={{ opacity: 1, color: 'black', }} />
                {/* </Flex> */}
            </Flex>

        </>
    )
}

export default ChatSection