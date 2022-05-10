import { AppShell, Header, MantineProvider, Title } from "@mantine/core";
import React, { ReactNode } from "react";
type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				fontFamily: "Montserrat, Open Sans, sans-serif",
				headings: {
					fontFamily: "Montserrat, Open Sans, sans-serif",
					fontWeight: "900",
				},
				colorScheme: "dark",
			}}
		>
			<AppShell
				padding="xl"
				header={
					<Header height={60} p="xs">
						<Title>A Dance with the Death...</Title>
					</Header>
				}
				styles={(theme) => ({
					main: {
						backgroundColor:
							theme.colorScheme === "dark"
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					},
				})}
			>
				{children}
			</AppShell>
		</MantineProvider>
	);
};

export default Layout;
